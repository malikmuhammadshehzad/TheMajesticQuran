import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SurahIntro from '../surahIntro';
import SurahFootNotes from '../surahFootNotes';
import SurahArabicAndEng from '../surahArabicAndEng';
import {COLORS, ICONS} from '../../assets';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ArabicAndEngData} from '../../Redux/Reducers/ArabicAndEngReducer';
import SingleSurahReducer, {
  SingleSurahData,
} from '../../Redux/Reducers/SingleSurahReducer';
const Tab = createMaterialTopTabNavigator();
const SingleSurah = ({route}) => {
  const {surah} = route.params;
  const navigation = useNavigation();
  // console.log(' route param data SingleSurah', surah);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SingleSurahData(surah.roman_name));
  }, [surah]);
  const {singleSurah} = useSelector(state => state.SurahReducer);
  
  // console.log("🚀 ~ file: index.js:31 ~ SingleSurah ~ singleSurah:", singleSurah)
  const singleSurahData = singleSurah?.message;
  // console.log("🚀 ~ file: index.js:34 ~ SingleSurah ~ singleSurahData:", singleSurahData[0].surah.roman_name)
  // console.log('singleSurah screen data ', singleSurahData);
  // console.log('testing', surah.roman_name !== singleSurah.roman_name );
  // console.log('!singleSurahData',!singleSurahData);
  return (
    <View style={styles.mainContainer}>
       <View style={styles.mainTitleContainer}>
            <Pressable
              style={styles.backIconContainer}
              onPress={() => {
                navigation.navigate('arabicAndEnglish');
              }}>
              <ICONS.BackIcon />
            </Pressable>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{surah.roman_name}</Text>
              <Text style={styles.romanName}>{surah.title}</Text>
            </View>
          </View>
      {!singleSurahData || surah.roman_name !== singleSurahData[0].surah.roman_name  ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <>     
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold', width: 130},
              tabBarStyle: {backgroundColor: COLORS.yellow},
              tabBarIndicatorStyle: {backgroundColor: COLORS.navyBlue},
              tabBarActiveTintColor: COLORS.navyBlue,
            }}>
            <Tab.Screen name="INTRO" component={SurahIntro} />
            <Tab.Screen name="ARABIC & ENG" component={SurahArabicAndEng} />
            <Tab.Screen name="FOOTNOTES" component={SurahFootNotes} />
          </Tab.Navigator>
        </>
      )}
    </View>
  );
};

export default SingleSurah;
