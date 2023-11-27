import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Favorite, HomeScreen, SearchScreen} from '../screen';
import DrawerContent from './DrawerContent';
// import TabNavigation from './TabNavigation'; 
import { COLORS } from '../assets';
import TabNavigation from './TabNavigation';
const Drawer = createDrawerNavigator();

 
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor:COLORS.navyBlue},
        headerTitleStyle: {textAlign: 'center',},
        headerTitleAlign: 'center',
        drawerStyle:{backgroundColor:COLORS.navyBlue},
       drawerLabelStyle:{color:'white'},
       headerTintColor: 'white',
       drawerActiveTintColor: '#FEBE00',
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

 