import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, SIZES} from '../Constants/theme';

const slides = [
  {
    id: 1,
    title: 'Title 1',
    description: 'We Provide High\nQuality Products\nJust For You',
    image: require('../assets/Images/onboard1.jpg'),
  },
  {
    key: 2,
    title: 'Title 2',
    description: 'We Ensure\nFast Delivery Of\nYour Order',
    image: require('../assets/Images/onboard2.jpg'),
  },
  {
    key: 3,
    title: 'Rocket guy',
    description: "We Provide The\nProducts You Can\nGet Satisfied With",
    image: require('../assets/Images/onboard3.jpg'),
  },
];

const OnBoarding = ({navigation}) => {
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  const renderSkipButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              {/* <Text style={styles.title}>{item.title}</Text> */}
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        );
      }}
      activeDotStyle={styles.activeDot}
      dotStyle={styles.dot}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      renderDoneButton={renderDoneButton}
      showSkipButton
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: SIZES.height * 0.5,
    width: SIZES.width * 1,
    paddingTop: SIZES.height * 0.1,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.05,
    marginBottom: SIZES.height * 0.8,
  },

  dot: {marginBottom: SIZES.height * 0.8,
     backgroundColor: COLORS.lightGray1},
  textContainer : {
   
    alignItems : 'center',
    // paddingHorizontal : SIZES.width * 0.2,
    paddingTop: SIZES.height * 0.02,
    // backgroundColor : 'red',
    // height : SIZES,height 
  },
  description: {
    fontSize: SIZES.height * 0.03, 
    width : SIZES.width * 1,
    color: 'black',
    // marginBottom: 10,
    textAlign : 'center'
  },
  buttonCircle: {
    width: SIZES.width * 0.25,
    // width: 100,
    height: SIZES.height* 0.05,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default OnBoarding;
