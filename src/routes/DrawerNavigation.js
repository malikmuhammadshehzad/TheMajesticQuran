import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Favorite, HomeScreen, SearchScreen} from '../screen';
import DrawerContent from './DrawerContent';
import TabNavigation from './TabNavigation';
import { COLORS } from '../assets';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'coral'},
        headerTitleStyle: {textAlign: 'center', backgroundColor: 'blue'},
        drawerStyle:{backgroundColor:COLORS.navyBlue},
       drawerLabelStyle:{color:'white'},
      drawerActiveTintColor:'yellow',
      drawerActiveBackgroundColor:'#FEBE0020'
}}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="main"
        component={TabNavigation}
      />
      <Drawer.Screen  name="Favorite" component={Favorite} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
