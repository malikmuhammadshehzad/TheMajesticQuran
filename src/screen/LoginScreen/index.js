import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {PassWordInput, PhoneInput, UserInput} from '../../components';
import {MyButton, PasswordInput} from '../../components/common';
import {COLORS, ICONS} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
const LoginScreen = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const {userData, isLoading} = useSelector(state => state.Auth);
  const LoginFunction = async () => {
    const obj = {
      number: number,
      password: password,
    };

    await dispatch(loginUser(obj));
    console.log('userData:', userData);
  };
  return (
    <View style={styles.manContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          The Majestic <Text style={styles.colorText}>Quran </Text>
        </Text>
        <Text style={styles.text}> A Plain English Translation </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.loginMainContainer}>
          <Text style={styles.title}>Login</Text>

          <View style={styles.inputContainer}>
            <PhoneInput
              value={number}
              onChangeText={text => setNumber(text)}
              placeholder="Enter Your Number"
            />
            <PasswordInput
              value={password}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.forgetContainer}>
            <Text style={styles.forgetText}>Forget Password</Text>
          </View>
          {/* {isLoading ? (
          <ActivityIndicator  size={'large'} />
        ) : (
          <MyButton
          onPress={() => {
            {}
            navigation.navigate('podcast');
          }}
          Label="Login"
          textColor={COLORS.white}
          height={49}
          width={'70%'}
          bgColor={COLORS.navyBlue}
        />
        )} */}
          <MyButton
            onPress={() => {
              navigation.navigate('podcast');
            }}
            Label="Login"
            textColor={COLORS.white}
            height={49}
            width={'70%'}
            bgColor={COLORS.navyBlue}
          />
          <View style={styles.btnContainer}>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
            <MyButton
              onPress={() => {
                navigation.navigate('signup');
              }}
              Label="Signup"
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

export default LoginScreen;
