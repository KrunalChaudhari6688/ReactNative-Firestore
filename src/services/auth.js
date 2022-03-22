import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert, ActivityIndicator } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState } from "react";

const googleLogin = async () => {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_sign_in = auth().signInWithCredential(googleCredential);

  user_sign_in
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createUserDb = (uid, fullName, email) => {
  return firestore().collection("users").doc(uid).set({
    uid,
    fullName,
    email,
  });
};

// signup handling
const signUp = async (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert.alert("Error", "Please enter all fields");
  } else {
    try {
      const cred = await auth().createUserWithEmailAndPassword(email, password);
      const { uid } = cred.user;

      auth().currentUser.updateProfile({
        displayName: fullName,
      });
      const uid_1 = uid;
      return await createUserDb(uid_1, fullName, email);
    } catch (err) {
      return Alert.alert(err.code, err.message);
    }
  }
};

const signIn = async (email, password) => {
  if (!email || !password) {
    Alert.alert("Error", "Please enter all fields");
  } else {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      return Alert.alert(err.code, err.message);
    }
  }
};

const forgetPassword = (email) => {
  if (!email) {
    Alert.alert("Error", "Please enter email");
  } else {
    return auth().sendPasswordResetEmail(email);
  }
};

const signOut = () => {
  return auth().signOut();
};

const Auth = {
  signUp,
  signIn,
  forgetPassword,
  signOut,
  googleLogin,
};

export default Auth;
