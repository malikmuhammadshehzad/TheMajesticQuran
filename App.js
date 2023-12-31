import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/routes';
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
      console.log("SplashScreen");
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Provider store={store} >    
        <AppNavigation />
    </Provider>
  )
};

export default App;

const styles = StyleSheet.create({});
