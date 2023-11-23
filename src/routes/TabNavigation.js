import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MenuScreen from '../screen/menu';
import SearchScreen from '../screen/searchScreen';
import TodoScreen from '../screen/todoScreen';
import HomeScreen from '../screen/home';
import Favorite from '../screen/favorite';
import { ICONS } from '../assets';
import { arabicAndEnglish } from '../screen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'white',

        tabBarStyle: {
          backgroundColor: '#000080',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={33} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({color}) => (
           
           <ICONS.FavoriteIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="todo"
        component={TodoScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="edit" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="arabicAndEnglish"
        component={arabicAndEnglish}
        options={{
          tabBarItemStyle:{display:'none'}
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
