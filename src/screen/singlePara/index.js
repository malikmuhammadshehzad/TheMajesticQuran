import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect , useRef } from 'react';
import {COLORS, ICONS} from '../../assets';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'
import {SingleParaData} from '../../Redux/Reducers/SingleParaReducer';
const SinglePara = ({route}) => {
  const flatListRef = useRef(null);
  const {Para} = route.params;
  const navigation = useNavigation();
  // console.log(' route param data singlePara', Para.roman_name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SingleParaData(Para.roman_name));
  }, [Para]);
  const {singlePara} = useSelector(state => state.SinglePara);

  // console.log(
  //   '🚀 ~ file: index.js:31 ~ singlePara ~ singlePara:',
  //   singlePara?.message,
  // );
  const singleParaData = singlePara?.message;
  


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
        <ActivityIndicator size="large" color={COLORS.navyBlue} style={{marginTop:270}} />
      ) : (
        <FlatList
          data={singleParaData}
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id ? `${item.id}-${item.title}` : `${index}`}
          renderItem={({item , index}) => (
            <View style={styles.flatContainer}>
              <TouchableOpacity onPress={()=>{}} style={styles.iconContainer}>              
                {/* <ICONS.FavoriteIcon color="#F4D201" /> */}
                <ICONS.EyeOneIcon size={27} />
                {/* <Text style={{color:COLORS.navyBlue , backgroundColor:'coral'}}>{index}</Text> */}
                {/* <Text style={styles.lastseen} >last Seen</Text> */}
              </TouchableOpacity>
              <Text style={styles.ayat}>{item?.ayats[0]?.ayat}</Text>
              {/* <Text style={styles.ayat}>{item?.ayats[0]?.ayat}</Text> */}
            </View>
          )}
        />
      )}  
    </View>
  );
};

export default SinglePara;
