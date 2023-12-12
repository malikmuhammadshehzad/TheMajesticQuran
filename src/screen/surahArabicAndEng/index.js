import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './style';
import { COLORS, ICONS } from '../../assets';
import { useSelector } from 'react-redux';
const SurahArabicAndEng = () => {
  const { singleSurah } = useSelector(state => state.SurahReducer);
  const singleSurahData = singleSurah?.message;
  console.log('singleSurahData:Arabic and English ', singleSurahData[0].surah.title);
  const surahName = singleSurahData[0].surah.roman_name;
  return (
    <>
      <FlatList
        data={singleSurahData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}-${item.title}`}
        renderItem={({ item }) => (
          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.number}>{item.ending_ayat}</Text>
              <Text style={styles.arabicTitle}>{item.surah.arabic_name}</Text>
              <Text style={styles.number}>{item.starting_ayat}</Text>
            </View>
            <Text style={styles.surahTitle}>{item.surah.title}</Text>

            <Text style={styles.bismila}>{item.surah.surah_story_heading}</Text>

            <Text style={styles.store}>{item.surah.surahStory}</Text>
            {/* <View style={styles.iconContainer}>
              <ICONS.FavoriteIcon color="#F4D201" />
            </View> */}
            <Text style={styles.ayat}>{item.ayat}</Text>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.paragraph}>{item.paragraph}</Text>
          </View>
        )}
      />

    
    </>
  );
};

export default SurahArabicAndEng;
