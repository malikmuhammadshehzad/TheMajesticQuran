import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/routes';
const App = () => {
  // useEffect(() => {
  //   SplashScreen.show()
  //   // Hide the splash screen after 3 seconds
  //   const timeoutId = setTimeout(() => {
  //     SplashScreen.hide();
  //     console.log("SplashScreen");
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  return <AppNavigation />;
};

export default App;

const styles = StyleSheet.create({});
