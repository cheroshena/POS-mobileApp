import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import UserProfileScreen from './src/screens/UserProfileScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './src/screens/CartScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const theme: Theme = useMemo(() => ({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fcfeff",
      text: "#191919",
      border: "#D9D9D9",
      primary: "#2a2755"
    }
  }), [])
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer theme={theme}>
          <BottomSheetModalProvider>
            <RootNavigator />
            

          </BottomSheetModalProvider>

          <StatusBar style='dark' />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
