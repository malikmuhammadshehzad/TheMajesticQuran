import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import {ICONS} from '../../assets';
import {SearchInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { ArabicAndEngData } from '../../Redux/Reducers/ArabicAndEngReducer';
const ArabicAndEnglish = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = [
    {
      id: '1.',
      englishName: 'Al-Fatihah',
      romanName: 'The Opening',
      arabicName: 'ألْفَاتِحَة',
    },
    {
      id: '2.',
      englishName: 'Al-Baqarah',
      romanName: 'The Cow',
      arabicName: 'الْبَقَرَة',
    },
    {
      id: '3.',
      englishName: 'Al-Imran',
      romanName: 'The Fmaily of Imran',
      arabicName: 'آل عِمْرَانَ',
    },
    {
      id: '4.',
      englishName: 'Al-Maidah',
      romanName: 'The Opening',
      arabicName: 'ٱلْمَائدَةْ',
    },
    {
      id: '5.',
      englishName: 'Al-Nisa',
      romanName: 'The Opening',
      arabicName: 'ألْفَاتِحَة',
    },
    {
      id: '6.',
      englishName: 'Al-Anam',
      romanName: 'The Feast',
      arabicName: 'ٱلأنعام',
    },
    {
      id: '6.',
      englishName: 'Al-Anam',
      romanName: 'The Feast',
      arabicName: 'ٱلأنعام',
    },
  ];
   const {surah} = useSelector(state => state.ArabicAndEng )
   const surahData = surah.message 
   console.log("surahData" ,surahData);
   useEffect(() => {
     dispatch(ArabicAndEngData())
   }, [])
   
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Pressable onPress={() => {navigation.goBack()}}>
          <ICONS.BackIcon />
        </Pressable>
        <Text style={styles.heading}> Arabic & English</Text>
      </View>
      <SearchInput />
      <FlatList
        style={styles.mainSurahContainer}
        data={surahData}
        // keyExtractor={item => `${item.englishName}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item }) => (
          <View style={styles.surahContainer}>
            <Text style={styles.index}>{item.surah_number}8.</Text>
            <View style={styles.nameContainer}>
              <Text style={styles.engName}>{item.roman_name} </Text>
              <Text    style={styles.romanName}>{item.title}</Text>
            </View>
            <Text style={styles.arabicName}>{item.arabic_name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ArabicAndEnglish;

StyleSheet;
