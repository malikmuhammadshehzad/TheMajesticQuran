import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {MYButton, PassWordInput, PhoneInput, UserInput} from '../../components';
import {COLORS, ICONS} from '../../assets';
import {useNavigation} from '@react-navigation/native';
// import { MyButton, PasswordInput } from '../../components/common';
const SignupScreen = () => {
  const navigation = useNavigation();
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
          <Text style={styles.title}>Signup</Text>

          <View style={styles.inputContainer}>
            <UserInput placeholder="Enter Your Number" />
            <PhoneInput placeholder="Enter Your Number" />
            <PassWordInput placeholder="Enter Your Password" />
          </View>
          <View style={styles.btn} >
            <MYButton
            onPress={()=>{navigation.navigate('podcast')}}
              Label="Sign Up"
              textColor={COLORS.white}
              height={49}
              width={'70%'}
              bgColor={COLORS.navyBlue}
            />
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
