import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {MYButton, SearchInput} from '../../components';
import {COLORS} from '../../assets';

const Podcast = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          The Majestic <Text style={styles.colorText}>Quran </Text>
        </Text>
        <Text style={styles.text}> A Plain English Translation </Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.userName}>Welcome Malik</Text>
        <MYButton
          Label="logout"
          bgColor={COLORS.navyBlue}
          width="20%"
          height={40}
          borderRadius={7}
          fontSize={19}
          textColor={COLORS.yellow}
        />
      </View>
      <ScrollView style={styles.scrollContainer}  >
       <SearchInput placeholder='Search' />
      </ScrollView>
    </View>
  );
};

export default Podcast;
