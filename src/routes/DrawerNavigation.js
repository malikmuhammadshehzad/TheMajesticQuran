import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
 
import { Favorite, HomeScreen, SearchScreen } from '../screen';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
      <Drawer.Navigator   >
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="favorite" component={Favorite} />
      </Drawer.Navigator>
  )
}

export default DrawerNavigation
