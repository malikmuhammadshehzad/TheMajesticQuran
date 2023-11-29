import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {ICONS} from '../../assets';
import {SearchInput} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ArabicAndEngData} from '../../Redux/Reducers/ArabicAndEngReducer';
const QuranArabic = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();

  const {surah, isSuccess} = useSelector(state => state.ArabicAndEng);
  const surahData = surah?.message;
  console.log('surahData', surahData);
  useEffect(() => {
    dispatch(ArabicAndEngData());
    if (isSuccess) {
      setSearchData(surahData);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (search && surahData) {
      const filterData = surahData.filter(item => {
        const value = item.roman_name.toLowerCase();
        return value.includes(search.toLowerCase());
      });
      setSearchData(filterData);
    } else {
      if (isSuccess) {
        setSearchData(surahData);
      }
    }
  }, [search]);
  const handleSingleSurah = surah => {
    navigation.navigate('singleSurah', {surah});
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ICONS.BackIcon />
        </Pressable>
        <Text style={styles.heading}>Quran Arabic</Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ICONS.BackIcon />
        </Pressable>
      </View>
      <SearchInput
        value={search}
        placeholder={'Search...'}
        onChangeText={text => setSearch(text)}
      />
      {!searchData ? (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="white"
        />
      ) : (
        <FlatList
          style={styles.mainSurahContainer}
          data={searchData}
          keyExtractor={item => `${item.id}-${item.title}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              style={styles.surahContainer}
              onPress={() => handleSingleSurah(item)}>
              <View style={styles.numContainer}>
                <Text style={styles.index}>{item.surah_number}9.</Text>
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.engName}>{item.roman_name}</Text>
              </View>
              <Text style={styles.arabicName}>{item.arabic_name}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default QuranArabic;
