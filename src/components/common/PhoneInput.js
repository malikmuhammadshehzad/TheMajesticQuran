import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS} from '../../assets';

const PhoneInput = props => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.manIcon}>
        <ICONS.PhoneIcon />
      </View>
      <TextInput
        {...props}
        keyboardType='number-pad'
        placeholderTextColor={'black'}
        style={styles.input}
      />
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: COLORS.navyBlue,
    borderWidth: 2,
    height: 45,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    marginLeft: 13,
    width: '90%',
    fontSize: 19,
    marginBottom: -2,
  },
  manIcon: {
    marginLeft: 12,
  },
});
