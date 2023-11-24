import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import {
  Favorite,
  HomeScreen,
  SearchScreen,
  TodoScreen,
  arabicAndEnglish,
} from '../screen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="root" component={TabNavigation} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="arabicAndEnglish" component={arabicAndEnglish}/> */}
        {/* <Stack.Screen name="favorite" component={Favorite}/>
        <Stack.Screen name="search" component={SearchScreen}/>
        <Stack.Screen name="todoList " component={TodoScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
