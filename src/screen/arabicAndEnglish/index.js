import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {ICONS} from '../../assets';
import {SearchInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
const ArabicAndEnglish = () => {
  const navigation = useNavigation();
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
  ];

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
        data={data}
        keyExtractor={item => `${item.englishName}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.surahContainer}>
            <Text style={styles.index}>{item.id}</Text>
            <View style={styles.nameContainer}>
              <Text style={styles.engName}>{item.englishName} </Text>
              <Text style={styles.romanName}>{item.romanName}</Text>
            </View>
            <Text style={styles.arabicName}>{item.arabicName}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ArabicAndEnglish;

StyleSheet;
