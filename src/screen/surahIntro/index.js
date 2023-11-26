import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
const SurahIntro = () => {
  const {singleSurah} = useSelector(state => state.SurahReducer);
  const singleSurahData = singleSurah?.message[0].surah.introduction;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <Text style={styles.text}>{singleSurahData}</Text>
    </ScrollView>
  );
};

export default SurahIntro;
