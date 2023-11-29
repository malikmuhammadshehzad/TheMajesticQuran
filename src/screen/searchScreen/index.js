import {Pressable, Text, View} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import {SearchInput} from '../../components';
import { ICONS } from '../../assets';
import {useNavigation} from '@react-navigation/native';
const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const  navigation = useNavigation()
  return (
    <View style={styles.mainContainer} >
      <View style={styles.headingContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ICONS.BackIcon/>
        </Pressable>
        <View style={styles.titleContainer}  >
        <Text style={styles.heading}>Search in translation</Text>
        </View>
      </View>
      <SearchInput
        value={search}
        placeholder={'Search...'}
        onChangeText={text => setSearch(text)}
      />
    </View>
  );
};

export default SearchScreen;
