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
import {QuranArabicData} from '../../Redux/Reducers/QuranArabicReducer';

const QuranArabic = ({route}) => {
  // const {lastSeen} = route?.lastSeen;
  console.log('lastSeenData', route);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();

  const {Para, isSuccess} = useSelector(state => state.QuranArabic);
  const ParaData = Para;
  // console.log('ParaData file', Para);
  useEffect(() => {
    dispatch(QuranArabicData());
    if (isSuccess) {
      setSearchData(ParaData);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (search && ParaData) {
      const filterData = ParaData.filter(item => {
        const value = item.roman_name.toLowerCase();
        return value.includes(search.toLowerCase());
      });
      setSearchData(filterData);
    } else {
      if (isSuccess) {
        setSearchData(ParaData);
      }
    }
  }, [search]);
  const handleSingleSurah = Para => {
    navigation.navigate('singlePara', {Para});
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
          keyExtractor={item => `${item._id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              style={styles.surahContainer}
              onPress={() => handleSingleSurah(item)}>
              <View style={styles.numContainer}>
                <Text style={styles.index}>{item.para_number}.</Text>
              </View>
              <View style={styles.nameContainer}>
                <Text numberOfLines={1} style={styles.engName}>
                  {item.roman_name}
                </Text>
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
