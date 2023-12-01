import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONT} from '../../assets';

const MYButton = ({
  Label,
  onPress,
  bgColor,
  width = '80%',
  height = 50,
  textColor,
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: textColor,
          fontFamily: FONT.poppinsMedium,
          fontSize: 25,
          fontWeight: '800',
        }}>
        {Label}
      </Text>
    </TouchableOpacity>
  );
};

export default MYButton;
