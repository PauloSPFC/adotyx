import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

import OnboardingScreen from './screens/OnboardingScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

import MessageScreen from './screens/MessageScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBO39t2c2aKyWWPq-DBnVRrtxXgm_smYNg",
  authDomain: "adotyx-premium.firebaseapp.com",
  databaseURL: "https://adotyx-premium.firebaseio.com",
  projectId: "adotyx-premium",
  storageBucket: "adotyx-premium.appspot.com",
  messagingSenderId: "417795639820",
  appId: "1:417795639820:web:676826366ed6f7f2a4bc29",
  measurementId: "G-C29PSFSX7G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
  {
    Início: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
      }
    },
    Procurar: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => 
          <Ionicons 
            name="ios-search" 
            size={32} 
            color="#5500FF"
            style={{
              shadowColor: "#5500FF",
              shadowOffset: { width:0, height:0},
              shadowRadius: 10,
              shadowOpacity: 0.3
            }} 
          />
      }
    },
    Mensagens: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
      }
    }
  },
  {
      tabBarOptions: {
        activeTintColor: "#161F3D"
      }
  }
)

const AuthStack = createStackNavigator ({
  Onboarding: {screen : OnboardingScreen, navigationOptions: { headerShown:false } },
  Login: LoginScreen,
  Registro: RegisterScreen
});

export default createAppContainer (
  createSwitchNavigator (
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
  
);


