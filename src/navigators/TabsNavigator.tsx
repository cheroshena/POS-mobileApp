import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icons from "@expo/vector-icons/MaterialIcons"
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackParamList, RootStackScreenProps } from './RootNavigator';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/WishlistScreen';
import UserProfileScreen from '../screens/UserProfileScreen';


export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Wishlist: undefined;
  Profile: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps<T extends keyof TabsStackParamList> = CompositeScreenProps<BottomTabScreenProps<TabsStackParamList, T>, RootStackScreenProps<"TabsStack">>

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator screenOptions={{
      tabBarShowLabel: false
    }}>
      <TabsStack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false, tabBarIcon(props) {
          return <Icons name="home"{...props} />
        },
      }}
      />
      <TabsStack.Screen name="Cart" component={CartScreen} options={{
        headerShown: false, tabBarIcon(props) {
          return <Icons name="shopping-cart"{...props} />
        },
      }} />
      <TabsStack.Screen name="Wishlist" component={WishlistScreen} options={{
        headerShown: false, tabBarIcon(props) {
          return <Icons name="favorite"{...props} />
        },
      }} />
      <TabsStack.Screen name="Profile" component={UserProfileScreen} options={{
        headerShown: false, tabBarIcon(props) {
          return <Icons name="person"{...props} />
        },
      }} />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;

const Example = () => {
  return <View />;
};