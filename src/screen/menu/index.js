// MenuScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const MenuScreen = () => {
 
const [isDrawerOpen , setIsDrawerOpen] = useState(false)
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Entypo name="menu" size={35} color={'black'} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={closeDrawer}
      >
        <View style={styles.drawerContainer}>
          {/* Add your drawer content here */}
          <Text>Drawer Content</Text>
          <TouchableOpacity onPress={closeDrawer}>
            <Text>Close Drawer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 100, // Adjust as needed
    marginHorizontal: 20, // Adjust as needed
    borderRadius: 10,
    padding: 20,
  },
});

export default MenuScreen;


