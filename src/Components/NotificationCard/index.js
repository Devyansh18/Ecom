import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES} from '../../Constants/theme';

const NotificationCard = () => {
  return (
    <TouchableOpacity style={styles.MainView}>
      <View style={styles.imageView}>
        
      </View>
      <View style={{paddingHorizontal : SIZES.width * 0.03}}>
      <Text style={{color : 'black'}} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  MainView: {
    backgroundColor: 'gray',
    width: '100%',
    height: SIZES.height * 0.1,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: SIZES.height * 0.015,
    flexDirection: 'row',
    paddingHorizontal : SIZES.width * 0.04,
  },
  imageView: {
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.13,
    borderRadius: SIZES.width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f3fc',
  },

});

export default NotificationCard;
