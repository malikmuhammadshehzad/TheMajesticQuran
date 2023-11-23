import {  Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FONT} from '../../assets';

const MYButton = ({Label, press, bgColor, width='80%' , height=50, textColor}) => {
  return (
    <TouchableOpacity
    onPress={press}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 22,
      }}
    >
      <Text
        style={{
          color: textColor,
          fontFamily: FONT.poppinsMedium,
          fontSize: 18,
          marginRight: 12,
          paddingTop: 3,
        }}>
        {Label}
      </Text>
       
    </TouchableOpacity>
  );
};

export default MYButton;
