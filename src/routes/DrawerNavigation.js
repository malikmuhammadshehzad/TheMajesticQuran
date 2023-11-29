import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AdmissionForm, FontsizeScreen } from '../screen';
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
        headerTitleStyle: {textAlign: 'center', fontSize:21 },
        headerTitleAlign: 'center',
        drawerStyle:{backgroundColor:COLORS.navyBlue},
       drawerLabelStyle:{color:'white' , fontSize:17},
       headerTintColor: 'white',
       drawerActiveTintColor: '#FEBE00',
      drawerActiveBackgroundColor:'#FEBE0020'
}}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Main"
        component={TabNavigation}
      />
      <Drawer.Screen  name="Font Size" component={FontsizeScreen} />
      <Drawer.Screen  name="Admission Form" component={AdmissionForm} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

 