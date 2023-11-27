import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {useSelector} from 'react-redux';
const SurahFootNotes = () => {
  const {singleSurah} = useSelector(state => state.SurahReducer);
  const singleSurahData = singleSurah?.message;
  // console.log('singleSurahData:FootNotes', singleSurahData.surah.footnotes[0]);
  return (
    <FlatList
      data={singleSurahData}
      keyExtractor={item => `${item.id}-${item.title}`}
      renderItem={({item}) => (
        <View style={styles.mainContainer}>
          {item.surah.footnotes.map((val, index) => (
            <View key={index}>
              <Text style={styles.title}> {val.word}</Text>
              <Text style={styles.text}>{val.meaning}</Text>
            </View>
          ))}
        </View>
      )}
    />
  );
};

export default SurahFootNotes;
