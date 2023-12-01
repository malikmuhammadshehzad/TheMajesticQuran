import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const MyInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        placeholderTextColor={"black"}
      
        style={styles.input}
      />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#E4E5E7",
    height: 45,
    borderRadius: 22,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 12,
    width: '100%',
  },
  input: {
    marginLeft: 13,
    width: '95%',
 
  },
});
