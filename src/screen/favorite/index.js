import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Favorite = () => {
  console.log('done');
  return (
    <View>
      <Text numberOfLines={1} style={{backgroundColor:'coral' , width:'60%',  fontSize: 16, }} >
        
        When numberOfLines is set, this prop defines how the text will be
        truncated. numberOfLines must be set in conjunction with this prop.
      </Text>
    </View>
  );
};

export default Favorite;
