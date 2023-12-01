import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import {COLORS, IMAGE} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.manContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          The Majestic <Text style={styles.colorText}>Quran </Text>
        </Text>
        <Text style={styles.text}> A Plain English Translation </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('quranArabic');
          }}>
          <Image style={styles.image} source={IMAGE.quranArabic} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('arabicAndEnglish');
          }}>
          <Image style={styles.image} source={IMAGE.arabicEng} />
          <Text style={styles.categoryText}>Arabic & English</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('quranEnglish');
          }}>
          <Image style={styles.image} source={IMAGE.quranEng} />
          <Text style={styles.categoryText}>Quran English</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('audioQuran');
          }}>
          <Image style={styles.image} source={IMAGE.audio} />
          <Text style={styles.categoryText}>Audio Quran</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('searchScreen');
          }}>
          <Image style={styles.image} source={IMAGE.search} />
          <Text style={styles.categoryText}>Search</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('notes');
          }}>
          <Image style={styles.image} source={IMAGE.notes} />
          <Text style={styles.categoryText}>Notes</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('login');
          }}>
          <Image style={styles.image} source={IMAGE.podcast} />
          <Text style={styles.categoryText}>Podcast</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('hades');
          }}>
          <Image style={styles.image} source={IMAGE.hades} />
          <Text style={styles.categoryText}>Hades</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
