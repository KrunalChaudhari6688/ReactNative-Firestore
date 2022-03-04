import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../constants';
import {Account} from '../services';

// service
import {Auth} from '../services';

const Profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Account.getProfile()
      .then(acc => setUser(acc), setLoading(false))
      .catch(err => Alert.alert(err.code, err.message));
  });

  if (loading) {
    return <ActivityIndicator color={colors.primary} size="large" />;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView>
        {user &&
          user.map((data, index) => (
            <View
              key={index}
              style={{
                paddingTop: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  paddingBottom: 15,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {data.fullName}
              </Text>
              <Text
                style={{
                  paddingBottom: 10,
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {data.email}
              </Text>
            </View>
          ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.signOutBtn}
        onPress={() => Auth.signOut()}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signOutBtn: {
    width: 150,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginLeft: 110,
    backgroundColor: '#5ca4c4',
    color: 'FFC0CB',
    tintColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 0.8,
    elevation: 0,
    shadowRadius: 20,
    shadowOffset: {width: 1, height: 13},
  },

  signOutText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Profile;
