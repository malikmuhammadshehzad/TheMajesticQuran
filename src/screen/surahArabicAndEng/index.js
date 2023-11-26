import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {COLORS, ICONS} from '../../assets';
import {useSelector} from 'react-redux';
const SurahArabicAndEng = () => {
  const {singleSurah} = useSelector(state => state.SurahReducer);
  const singleSurahData = singleSurah?.message;
  // console.log('singleSurahData:Arabic and English ', singleSurahData[0].surah.roman_name);
  const surahName = singleSurahData[0].surah.roman_name;
  return (
    <>
      <FlatList
        data={singleSurahData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}-${item.title}`}
        renderItem={({item}) => (
          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.endingAyat}>{item.ending_ayat}</Text>
              <Text style={styles.arabicName}>{item.surah.arabic_name}</Text>
              <Text style={styles.startingAyat}>{item.starting_ayat}</Text>
            </View>

            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.iconContainer}>
              <ICONS.FavoriteIcon color="#F4D201" />
            </View>
            <Text style={styles.titleContainer}>{item.ayat}</Text>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.Text}>{item.paragraph}</Text>
          </View>
        )}
      />

      <View style={styles.audioContainer}>
        <Text style={styles.surahName}>{surahName}</Text>
        <View style={styles.audioIconContainer}>
          <ICONS.PlayIcon color={COLORS.navyBlue} />
          <ICONS.PlayIcon color={COLORS.navyBlue} />
          <ICONS.PlayIcon color={COLORS.navyBlue} />
          <ICONS.SquareIcon color={COLORS.navyBlue} />
        </View>
      </View>
    </>
  );
};

export default SurahArabicAndEng;
