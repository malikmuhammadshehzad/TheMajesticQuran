import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import TodoScreen from '../screen/todoScreen';
import HomeScreen from '../screen/home';
import Favorite from '../screen/favorite';
import {ICONS} from '../assets';
import {
  AudioQuran,
  Hades,
  LoginScreen,
  Notes,
  Podcast,
  QuranArabic,
  QuranEnglish,
  QuranEnglishSingleSurah,
  SearchScreen,
  SignupScreen,
  SinglePara,
  SingleSurah,
  arabicAndEnglish,
} from '../screen';
import DrawerNavigation from './DrawerNavigation';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
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
            tabBarIcon: ({color}) => <ICONS.FavoriteIcon color={color} />,
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
          component={DrawerNavigation}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="menu" size={35} color={color} />
            ),
            tabBarPressColor: 'transparent',
            tabBarPressAnimationEnabled: false,
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            ),
          }}
        />
        <Tab.Screen
          name="arabicAndEnglish"
          component={arabicAndEnglish}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="singleSurah"
          component={SingleSurah}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />

        <Tab.Screen
          name="quranArabic"
          component={QuranArabic}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name= 'quranEnglish'
          component={QuranEnglish}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="audioQuran"
          component={AudioQuran}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="searchScreen"
          component={SearchScreen}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="notes"
          component={Notes}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="podcast"
          component={Podcast}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="hades"
          component={Hades}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="quranEngSingleSurah"
          component={QuranEnglishSingleSurah}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="login"
          component={LoginScreen}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="signup"
          component={SignupScreen}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
        <Tab.Screen
          name="singlePara"
          component={SinglePara}
          options={{
            tabBarItemStyle: {display: 'none'},
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
