
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Modal,
  Pressable,
} from 'react-native';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, ICONS } from '../../assets';
/// my Data 
// import { useDispatch } from 'react-redux';
// import { PlayerData } from '../../Redux/Reducers/PlayerReducer';
// const {surah} = route.param
// console.log(' route param data SingleSurah', surah);
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(PlayerData(surah.roman_name));
// }, [surah]);
// const { player } = useSelector(state => state.Player);
// const singlePlayerData = player?.message;
// console.log('singlePlayerData', singlePlayerData);
 

 
// nomal player 
const tracks = [
  {
    id: 2,
    title: 'Awful',
    artist: 'pan',
    artwork:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdomf5oio6qrcr.cloudfront.net%2Fmedialibrary%2F8718%2Fbrain-music-health-memory.jpg&tbnid=70poib9oaptTMM&vet=12ahUKEwirkcSO2YmDAxUvUKQEHQLbB14QMygLegUIARCJAQ..i&imgrefurl=https%3A%2F%2Fwww.health.harvard.edu%2Fblog%2Fhealing-through-music-201511058556&docid=NiquLkcrTHWSWM&w=1518&h=1265&q=music&ved=2ahUKEwirkcSO2YmDAxUvUKQEHQLbB14QMygLegUIARCJAQ',
    url: 'https://doctorsforhealth.co.uk/mp3/Arabic_sudais/001.mp3',
  },
  {
    id: 1,
    title: 'Awful',
    artist: 'josh',
    url: 'https://doctorsforhealth.co.uk/mp3/Arabic_kurd/003.mp3',
    artwork:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.copyright.gov%2Fmusic-modernization%2Fimages%2Flicensing-interactive-streams.jpg&tbnid=duDEND4DZanofM&vet=12ahUKEwirkcSO2YmDAxUvUKQEHQLbB14QMygRegUIARCWAQ..i&imgrefurl=https%3A%2F%2Fwww.copyright.gov%2Fmusic-modernization%2F&docid=uXy9p7Umlf8lAM&w=5000&h=3337&q=music&ved=2ahUKEwirkcSO2YmDAxUvUKQEHQLbB14QMygRegUIARCWAQ',
  },
  {
    id: 3,
    title: 'Awful',
    artwork:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.copyright.gov%2Fmusic-modernization%2Fimages%2Flicensing-interactive-streams.jpg&tbnid=duDEND4DZanofM&vet=12ahUKEwirkcSO2YmDAxUvUKQEHQLbB14QMygRegUIARCWAQ..i&imgrefurl=https%3A%2F%2Fwww.copyright.gov%2Fmusic-modernization%2F&docid=uXy9p7Umlf8lAM&w=5000&h=3337&q=music&ved=2ahUKEwirkcSO2YmDAxUvUKQEHQLbB14QMygRegUIARCWAQ',
    artist: 'j pan',
    url: 'https://doctorsforhealth.co.uk/mp3/Arabic_kurd/002.mp3',
  },
];

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
  ],
});

const Player = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  // nomal player 
  const setUpTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
      console.log('Tracks added');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setUpTrackPlayer();
    return () => TrackPlayer.destroy();
  }, []);
  const toggleModal = () => {
    console.log('Toggling modal. Current state:', isModalVisible);
    setModalVisible(!isModalVisible);
  };
 
  return (   
  <>
  <View style={style.container}>
 
      {/* music player section */}
      <View style={style.mainContainer}>
           {/* music control */}
        <View style={style.musicControlsContainer}>
          <TouchableOpacity   onPress={() => TrackPlayer.skipToPrevious()}>
            <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.pause()}>
            <FontAwesome
              name="play"
              size={40}
              color="#FFD369"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.play()}>
            <FontAwesome
              name="pause"
              size={35}
              color="#FFD369"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color="#FFD369"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* bottom section */}
      <View style={style.bottomSection}>
        <View style={style.bottomIconContainer}>
          <TouchableOpacity  onPress={toggleModal} >
            {/* <MaterialCommunityIcons
              name={`${repeatIcon()}`}
              size={30}
              color={repeatMode !== 'off' ? '#FFD369' : '#888888'}
            /> */}
            <ICONS.manIcon color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View styles={{flex:1}} >

   
     {isModalVisible== true ? <Modal isVisible={false} >
      <View style={style.modalMain} >
       <Text styles={{color:COLORS.black , fontSize:27 }} >
            Mishary bin Rashid
           </Text>
       <Text styles={{color:COLORS.black ,fontSize:27 }} >
            Abdul Rehman Al-sudais
           </Text>
       <Text styles={{color:COLORS.black ,fontSize:27 }} >
           Abdul Basit
           </Text>
           <Pressable onPress={toggleModal} >
            <Text styles={{color:COLORS.black ,fontSize:27 }} >
            back to Player
            </Text>        
           </Pressable>
      </View>
      </Modal> : (
        null
      )  }
  </View>
    </>
  );
};
 

export default Player;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.navyBlue
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    borderTopColor: '#393E46',
    backgroundColor:COLORS.white,
    borderWidth: 1,   
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  mainWrapper: {
    // width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  songArtist: {
    fontSize: 16,
    fontWeight: '300',
  },

  progressBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLevelDuraiton: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#FFF',
  },

  musicControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: '60%',
  },
  modalMain:{
    width:'80%',
     height:200,
     borderRadius: 12,
      padding: 12 
  }
});
