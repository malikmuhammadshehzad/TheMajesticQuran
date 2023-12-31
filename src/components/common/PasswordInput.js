import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {COLORS, ICONS} from '../../assets';

const  PasswordInput = props => {
  return (
    <View style={styles.inputContainer}>
      <ICONS.CloseLock/>
      <TextInput
        {...props}
        placeholderTextColor={'black'}
        style={styles.input}
      />
      <View style={{marginRight:5}} >
      <ICONS.FillEyeOff/>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor:COLORS.navyBlue,
    borderWidth:2,
    height: 45,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
   width:'100%'
  },
  input: {
    marginLeft: 13,
    width: '84%',
    fontSize: 19,
    marginBottom: -2,
  },
});