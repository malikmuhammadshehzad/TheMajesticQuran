import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useAnimatedValue,
} from 'react-native';
import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
const Favorite = () => {
  const navigation = useNavigation();
  console.log('done');
  return (
    <View>
      {/* <Text
        numberOfLines={1}
        style={{backgroundColor: 'coral', width: '60%', fontSize: 16}}>
        When numberOfLines is set, this prop defines how the text will be
        truncated. numberOfLines must be set in conjunction with this prop.
      </Text> */}
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Text> Button</Text>
      </Pressable>
    </View>
  );
};

export default Favorite;
