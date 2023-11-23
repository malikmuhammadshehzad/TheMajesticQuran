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
        <Pressable style={styles.Category} onPress={() => {}}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
        <Pressable
          style={styles.Category}
          onPress={() => {
            navigation.navigate('arabicAndEnglish');
          }}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Arabic & English</Text>
        </Pressable>
        <Pressable style={styles.Category} onPress={() => {}}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
        <Pressable style={styles.Category} onPress={() => {}}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
        <Pressable style={styles.Category} onPress={() => {}}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
        <Pressable style={styles.Category} onPress={() => {}}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
        <Pressable style={styles.Category} onPress={() => {}}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
        <Pressable style={styles.Category} onPress={() => {}}>
          <Image style={styles.image} source={IMAGE.alQuran} />
          <Text style={styles.categoryText}>Quran Arabic</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  manContainer: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000080',
    height: '15%',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  colorText: {
    color: 'yellow',
  },
  scrollViewStyle: {
    backgroundColor:COLORS.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  Category: {
    backgroundColor: 'white',
    borderColor: 'yellow',
    borderWidth: 5,
    borderRadius: 17,
    width: 160,
    height: 150,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: 'coral',
  },
  image: {
    resizeMode: 'contain',
    height: '60%',
    width: '100%',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '700',
    color: '#000080',
    // backgroundColor:'coral'
  },
});

export default HomeScreen;
