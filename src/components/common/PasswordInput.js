import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {COLORS, ICONS} from '../../assets';

const  PasswordInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        placeholderTextColor={'black'}
        style={styles.input}
      />
      <ICONS.EyeOffIcon/>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.lightGrey,
    height: 45,
    borderRadius: 22,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
   width:'100%'
  },
  input: {
    marginLeft: 13,
    width: '85%',
     
  },
});