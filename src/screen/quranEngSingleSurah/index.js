import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {COLORS, ICONS} from '../../assets';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {QuranEngSingleSurahData} from '../../Redux/Reducers/QuranEngSingleSurahReducer';
import {useEffect} from 'react';
const QuranEnglishSingleSurah = ({route}) => {
  const navigation = useNavigation();
  const {surah} = route.params;

  console.log(' route param data SingleSurah', surah);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(QuranEngSingleSurahData(surah.roman_name));
  }, [surah]);
  const {singleSurah} = useSelector(state => state.QuranAndEng);
  const singleSurahData = singleSurah?.message;
  // console.log('QuranAndEngSingleSurahData', singleSurahData);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTitleContainer}>
        <Pressable
          style={styles.backIconContainer}
          onPress={() => {
            navigation.navigate('quranEnglish');
          }}>
          <ICONS.BackIcon />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{surah.roman_name}</Text>
          <Text style={styles.romanName}>{surah.title}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.maiEngQuranText}>
          <View style={styles.introContainer}>
            <Text style={styles.introHeading}>(Introduction)</Text>
          </View>
          <Text style={styles.engQuranText}>
             {surah.introduction}
          </Text>
        </View>
      
      {!singleSurahData ||
      surah.roman_name !== singleSurahData[0].surah.roman_name ? (
        <ActivityIndicator size="large" color={COLORS.navyBlue} />
      ) : (
        <FlatList
          data={singleSurahData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `${item.id}-${item.title}`}
          renderItem={({item}) => (
            <View style={styles.FlatListContainer}>
              <View style={styles.SurahTitleContainer}>
                <Text style={styles.number}>{item.starting_ayat}.</Text>
                <Text style={styles.arabicTitle}>{item.surah.roman_name}</Text>
                <View style={styles.numAyatContainer}>
                  <Text style={styles.ayatNum}>{item.ending_ayat}</Text>
                  <Text style={styles.numAyats}>Ayats</Text>
                </View>
              </View>

              <Text style={styles.surahTitle}>{item.surah.title}</Text>
              <View style={styles.bismilaContainer}>
                <Text style={styles.arabicBismillah}>
                  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                </Text>
                <Text style={styles.englishBismillah}>
                  In the name of God, the Most Gracious, the Most Merciful.
                </Text>
              </View>
              <Text style={styles.heading}>{item.title}</Text>
              <Text style={styles.paragraph}>{item.paragraph}</Text>
            </View>
          )}
        />
      )}
      </ScrollView>
    </View>
  );
};

export default QuranEnglishSingleSurah;
