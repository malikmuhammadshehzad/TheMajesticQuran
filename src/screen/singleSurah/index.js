import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SurahIntro from '../surahIntro';
import SurahFootNotes from '../surahFootNotes';
import SurahArabicAndEng from '../surahArabicAndEng';
import {COLORS, ICONS} from '../../assets';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { ArabicAndEngData } from '../../Redux/Reducers/ArabicAndEngReducer';
const Tab = createMaterialTopTabNavigator();
const SingleSurah = () => {
    const navigation = useNavigation()
    // const dispatch = useDispatch();

    // const {surah} = useSelector(state => state.ArabicAndEng);
    // const surahData = surah.message;
    // console.log('singleSurah', surahData);
    // useEffect(() => {
    //   dispatch(ArabicAndEngData());
    // }, []);
  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainTitleContainer} >  
        <Pressable
        style={styles.backIconContainer}
          onPress={() => {
            navigation.navigate('arabicAndEnglish');
          }}>
          <ICONS.BackIcon />
        </Pressable>
        <View style={styles.titleContainer} >  
      <Text style={styles.title} >Al-Fatihah</Text>
      <Text style={styles.romanName}> The Opening</Text>
      </View>
      </View>
      <Tab.Navigator
      
        screenOptions={{
          tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold', width: 130},
          tabBarStyle: {backgroundColor: 'yellow'},
          tabBarIndicatorStyle: {backgroundColor: COLORS.navyBlue},
          tabBarActiveTintColor: COLORS.navyBlue,
        }}>
        <Tab.Screen name="INTRO" component={SurahIntro} />
        <Tab.Screen name="ARABIC & ENG" component={SurahArabicAndEng} />
        <Tab.Screen name="FOOTNOTES" component={SurahFootNotes} />
      </Tab.Navigator>
    </View>
  );
};

export default SingleSurah;
