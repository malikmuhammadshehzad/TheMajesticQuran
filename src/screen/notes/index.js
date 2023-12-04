import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {PlusButton, SearchInput} from '../../components';
import {COLORS, ICONS} from '../../assets';
import {useNavigation} from '@react-navigation/native';
const Notes = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <ICONS.BackIcon />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Notes</Text>
        </View>
      </View>
      <SearchInput
        value={search}
        placeholder={'Search...'}
        onChangeText={text => setSearch(text)}
      />
      <ScrollView>
        <Pressable style={styles.mainList}>
          <View style={styles.listText}>
            <Text style={styles.title}>Title </Text>
            <Text  numberOfLines={1} style={styles.text}>Description</Text>
            <Text style={styles.text}>create at 29/11/2023</Text>
          </View>
          <TouchableOpacity>
            <ICONS.ShareIcon color={COLORS.navyBlue} />
          </TouchableOpacity>
        </Pressable>
      </ScrollView>
      <TouchableOpacity style={styles.plusContainer}>
        <ICONS.PlusIcon size={70} bgColor={COLORS.yellow} />
      </TouchableOpacity>
    </View>
  );
};

export default Notes;
