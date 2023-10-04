import React from 'react'
import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';
import OrderMethodScreen from '../screens/OrderMethodScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import WishlistScreen from '../screens/WishlistScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import FeedbackRatingScreen from '../screens/FeedbackRatingScreen';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import IntroScreen02 from '../screens/IntroScreen02';
import IntroScreen01 from '../screens/IntroScreen01';


export type RootStackParamList = {
  introScreen: undefined;
  loginScreen: undefined;
  signUpScreen: undefined;
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  TabsStack: NavigatorScreenParams<TabsStackParamList>;

  Details: {
    id: string;
  };
  OrderMethod: {
    id: string;
  };
  OrderDetails: {
    id: string;
  };
  OrderHistory: {

  };
  Feedback: {
    id: string;
  };




}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

const RootNavigator = () => {
  return (

    <RootStack.Navigator>

      <RootStack.Screen
        name="introScreen"
        component={IntroScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="IntroScreen01"
        component={IntroScreen01}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="IntroScreen02"
        component={IntroScreen02}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="loginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="signUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="TabsStack"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />


      <RootStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="OrderMethod"
        component={OrderMethodScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="OrderDetails"
        component={OrderDetailsScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Feedback"
        component={FeedbackRatingScreen}
        options={{ headerShown: false }}
      />






    </RootStack.Navigator>
  )
}



export default RootNavigator