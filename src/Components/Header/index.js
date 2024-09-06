import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../Constants/theme';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <AntDesign name="left" size={22} color={COLORS.gray} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SIZES.width * 0.06,
    paddingVertical: SIZES.height * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    width: SIZES.width * 0.09,
    height: SIZES.height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: COLORS.lightGray10,
    borderWidth: 1,
    position: 'absolute',
    left: 25,
  },
  title: {
    color: 'black',
    width: SIZES.width * 0.5,
    fontSize: SIZES.width * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
