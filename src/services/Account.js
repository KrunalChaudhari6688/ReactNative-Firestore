import firestore from "@react-native-firebase/firestore";

//fetch Users Data from Firestore
const getProfile = async () => {
  try {
    const snap = await firestore().collection("users").get();
    const users = [];
    snap.forEach((user) => users.push(user.data()));
    return users;
  } catch (err) {
    return err;
  }
};

//Fetch Books Data from firestore
const getBooksData = async () => {
  try {
    const snap = await firestore().collection("books").get();
    const books = [];
    snap.forEach((user) => books.push(user.data()));
    return books;
  } catch (err) {
    return err;
  }
};

export default Account = {
  getProfile,
  getBooksData,
};
