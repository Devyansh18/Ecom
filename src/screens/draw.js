import * as React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {COLORS, SIZES} from '../Constants/theme';
import images from '../Constants/images';

function Draw() {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const data = [...new Array(3).keys()];

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{}}>
      <Carousel
        loop
        width={width}
        height={width / 2.4}
        autoPlay={true}
        autoPlayInterval={2000} // Added autoPlayInterval
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({index}) => (
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                // flex: 1,
                // borderWidth: 1,
                height: SIZES.height * 0.18,
                width: '85%',
                // justifyContent: 'center',
                // marginHorizontal: SIZES.width * 0.08,
                borderRadius: 20,
                backgroundColor: 'skyblue',
                paddingLeft: SIZES.width * 0.05,
                paddingTop: SIZES.height * 0.03,
              }}>
              <Text style={{color: 'black'}}>Upto</Text>
              <Text style={{fontSize: 20, color: 'black'}}>30% Discount</Text>
              <View
                style={{
                  backgroundColor: 'white',
                  width: SIZES.width * 0.25,
                  borderRadius: 15,
                  paddingVertical: 5,
                  marginTop: SIZES.height * 0.02,
                }}>
                <TouchableOpacity>
                  <Text style={{color: 'black', textAlign: 'center'}}>
                    Order Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image
              source={images.ManImage}
              style={{position: 'absolute', right: 13, bottom : 0 }}
            />
            {renderPagination()}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal:5,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
  },
  inactiveDot: {
    backgroundColor: COLORS.white,
  },
});

export default Draw;
