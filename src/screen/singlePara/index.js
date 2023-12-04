import {
  ActivityIndicator,
  FlatList,
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

import {SingleParaData} from '../../Redux/Reducers/SingleParaReducer';
const Tab = createMaterialTopTabNavigator();
const SinglePara = ({route}) => {
  const {Para} = route.params;
  const navigation = useNavigation();
  console.log(' route param data singlePara', Para.roman_name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SingleParaData(Para.roman_name));
  }, [Para]);
  const {singlePara} = useSelector(state => state.SinglePara);

  console.log('🚀 ~ file: index.js:31 ~ singlePara ~ singlePara:', singlePara);
  const singleParaData = singlePara?.message[0].ayats;
  // console.log("🚀 ~ file: index.js:34 ~ singlePara ~ singleParaData:", singleParaData[0].surah.roman_name)
  // console.log('singlePara screen data ', singleParaData[0].ayats);
  // console.log('testing', surah.roman_name !== singlePara.roman_name );
  // console.log('!singleParaData',!singleParaData);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTitleContainer}>
        <Pressable
          style={styles.backIconContainer}
          onPress={() => {
            navigation.navigate('quranArabic');
          }}>
          <ICONS.BackIcon />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{Para.roman_name}</Text>
        </View>
      </View>

      {!singleParaData ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <FlatList
          data={singleParaData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}-${item.title}`}
          renderItem={({item}) => (
            <View style={styles.mainContainer}>
              <Pressable onPress={()=>{}} style={styles.iconContainer}>
                <ICONS.FavoriteIcon color="#F4D201" />
              </Pressable>
              <Text style={styles.ayat}>{item.ayat}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default SinglePara;
