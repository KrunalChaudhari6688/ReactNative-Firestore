import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BookData} from '../screens';
import {Profile} from '../screens';
import {BooksList} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#5ca4c4',
          borderRadius: 15,
          height: 65,
          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="Add Book Data"
        component={BookData}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 13}}>
              <Image
                source={require('../assets/bot.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#235b93' : '#fff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#262626' : '#fff',
                  fontSize: 14,
                  top: 5,
                  fontWeight: 'bold',
                }}>
                Books
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Books List"
        component={BooksList}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 13}}>
              <Image
                source={require('../assets/info.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#235b93' : '#fff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#262626' : '#fff',
                  fontSize: 14,
                  top: 5,
                  fontWeight: 'bold',
                }}>
                BookList
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 13}}>
              <Image
                source={require('../assets/usersharp.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#235b93' : '#fff',
                }}
              />
              <Text
                style={{
                  color: focused ? '#262626' : '#fff',
                  fontSize: 14,
                  top: 5,
                  fontWeight: 'bold',
                }}>
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default AppNavigator;
