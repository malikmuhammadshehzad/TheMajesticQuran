import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { MYButton, PassWordInput, PhoneInput, UserInput } from '../../components';
import { COLORS, ICONS } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { SignupUser } from '../../Redux/Reducers/AuthReducer';
import { useDispatch, useSelector } from 'react-redux';
// import { MyButton, PasswordInput } from '../../components/common';
const SignupScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const dispatch = useDispatch();
  const { userData, isLoading } = useSelector(state => state.Auth)
  console.log("signUp data ", userData);
  const SignupFunction = async () => {
    const obj = {
      name: name,
      mobile: number,
      password: password,
    };
    await dispatch(SignupUser(obj));
    console.log(' Signup user data:', userData);
    if (userData) {
      console.log('Navigating to notes...');
      navigation.navigate('notes');
    } else {
      console.log('User data not available after signup.');
  }  
    setNumber('')
    setName(''),
      setPassword('')
  };
  return (
    <View style={styles.manContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          The Majestic <Text style={styles.colorText}>Quran </Text>
        </Text>
        <Text style={styles.text}> A Plain English Translation </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.loginMainContainer}>
          <Text style={styles.title}>Signup</Text>
          <View style={styles.inputContainer}>
            <UserInput value={name} onChangeText={text => setName(text)} placeholder="Enter Your Number" />
            <PhoneInput value={number} onChangeText={text => setNumber(text)} placeholder="Enter Your Number" />
            <PassWordInput value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder="Enter Your Password" />
          </View>
          <View style={styles.btn} >
            {isLoading ?
              <ActivityIndicator size='large' color={COLORS.navyBlue} />
              : (
                <MYButton
                  onPress={SignupFunction}
                  Label="Sign Up"
                  textColor={COLORS.white}
                  height={49}
                  width={'70%'}
                  bgColor={COLORS.navyBlue}
                />
              )}
         
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.noAccountText}>Already have an account?</Text>

            <MYButton
              onPress={() => navigation.navigate('login')}
              Label="Login"
              textColor={COLORS.navyBlue}
              height={40}
              width={'30%'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
