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
  borderRadius = 10,
  fontWeight = '800',
  fontSize = 25,
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
        borderRadius: borderRadius,
      }}>
      <Text
        style={{
          color: textColor,
          fontFamily: FONT.poppinsMedium,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}>
        {Label}
      </Text>
    </TouchableOpacity>
  );
};

export default MYButton;
