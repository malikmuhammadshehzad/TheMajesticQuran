import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import { MYButton, SearchInput } from '../../components';
import { COLORS } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { PodcastData } from '../../Redux/Reducers/PodcastReducer';
import YoutubePlayer from 'react-native-youtube-iframe';


const Podcast = () => {

  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const { podcast, isSuccess } = useSelector(state => state.PodCast)
  // console.log("podcast Data from Reducer", podcast)
  const { userData} = useSelector(state => state.Auth)  
  
  useEffect(() => {
    dispatch(PodcastData())
    if (isSuccess) {
      setSearchData(podcast);
    }
  }, [dispatch, isSuccess])
  useEffect(() => {
    if (search && podcast) {
      const filterData = podcast.filter(item => {
        const value = item.roman_name.toLowerCase();
        return value.includes(search.toLowerCase());
      });
      setSearchData(filterData);
    } else {
      if (isSuccess) {
        setSearchData(podcast);
      }
    }
  }, [search, podcast, isSuccess]);
  // console.log('Search Data', searchData);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          The Majestic <Text style={styles.colorText}>Quran </Text>
        </Text>
        <Text style={styles.text}> A Plain English Translation </Text>
      </View>
      {}
      <View style={styles.userContainer}>
        
        <Text style={styles.userName}>Welcome Malik</Text>
        <MYButton
          Label="logout"
          bgColor={COLORS.navyBlue}
          width="20%"
          height={40}
          borderRadius={7}
          fontSize={19}
          textColor={COLORS.yellow}
        />
      </View>
      <SearchInput
        value={search}
        placeholder={'Search...'}
        onChangeText={text => setSearch(text)}
      />
      <ScrollView style={styles.scrollContainer}  >
        {/* <SearchInput
          value={search}
          placeholder={'Search...'}
          onChangeText={text => setSearch(text)}
        /> */}
        <View style={styles.videoContainer} >
          <YoutubePlayer
            height={209}
            play={false}
            videoId='VWNYeRaCVu8'
          // webViewStyle={{backgroundColor:'coral'}}
          />
          <Text style={styles.title} >Woman</Text>
          <Text style={styles.discription} >What it means to be a Woman | Dr. Haifaa Younis (Full Podcast)"</Text>
          <YoutubePlayer
            height={209}
            play={false}
            videoId='Tow8zLNhzO8'
          // webViewStyle={{backgroundColor:'coral'}}
          />
          <Text style={styles.title} >Building a Strong Muslim Mindset | Sh. Abdullah Oduro</Text>
          <Text numberOfLines={2} style={styles.discription} >In a world of motivational speakers, celebrity life coaches and
            online influencers - how does a Muslim develop a strong mindset. We sit down with
            Shaykh Abdullah Oduro from Dallas, Texas to discuss ways in which Muslims can foster their own unique mindset in light of their faith. </Text>
          <YoutubePlayer
            height={209}
            play={false}
            videoId='VWNYeRaCVu8'
          // webViewStyle={{backgroundColor:'coral'}}
          />
          <Text style={styles.title} >Woman</Text>
          <Text style={styles.discription} >What it means to be a Woman | Dr. Haifaa Younis (Full Podcast)"</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Podcast;
