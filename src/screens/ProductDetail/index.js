import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../Constants/theme';
import Header from '../../Components/Header';



const SizeData = [
  {
    id: 1,
    Size: 'S',
  },
  {
    id: 2,
    Size: 'M',
  },
  {
    id: 3,
    Size: 'L',
  },
  {
    id: 4,
    Size: 'XL',
  },
  {
    id: 5,
    Size: 'XXL',
  },
];

const ProductDetail = ({route, navigation}) => {
  const [showFullDescription, setshowFullDescription] = useState(false);
  const [counter, setcounter] = useState(0)
  const descriptionLimit = 75;
  const {product} = route.params;

  const getDescriptionText = () => {
    if (showFullDescription) {
      return product.description;
    }

    if (product.description.length > descriptionLimit) {
      return product.description.substring(0, descriptionLimit) + '...';
    }
    return product.description;
  };

  const toggleDescription = () => {
    setshowFullDescription(!showFullDescription);
  };

  const navigateToBack = () => {
    navigation.goBack();
  };

  // const {product} = route.params;
  return (
    <View style={styles.MainContainer}>
      <Header title={'Product Details'} onPress={navigateToBack} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.ImageContainer}>
          <TouchableOpacity style={styles.LikeButton}>
            <AntDesign name="hearto" size={22} color={COLORS.lightGray} />
          </TouchableOpacity>
          <Image
            source={{uri: product.image}}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '70%'}}>
              <Text style={styles.productName}>{product.title}</Text>
              <View style={styles.ratingContainer}>
                <AntDesign name="star" size={17} style={{color: '#FFD700'}} />
                <Text style={styles.ratingText}>
                  {product.rating.rate}
                  <Text style={styles.reviewsText}>
                    ({product.rating.count} reviews)
                  </Text>{' '}
                </Text>
              </View>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>Price</Text>
              <Text style={styles.productPrice}>$ {product.price}</Text>
            </View>
          </View>

          <Text style={styles.description}>Select Size</Text>

          <View
            style={{flexDirection: 'row', marginBottom: SIZES.height * 0.02}}>
            {SizeData.map((item, index) => {
              return (
                <TouchableOpacity style={styles.SizeView}>
                  <Text style={{color: COLORS.gray30}}>{item.Size}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.description}>Quantity</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity>
              <AntDesign
                name="minussquareo"
                size={28}
                color={COLORS.lightGray1}
              />
            </TouchableOpacity>
            <View style={styles.QuantityView}>
              <Text style={{color: 'black', textAlign: 'center'}}>01</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="plussquare" size={28} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>Description</Text>

          {/* <Text
              style={styles.productDescription}
              // numberOfLines={showFullDescription ? undefined : 2}
            >
              {product.description.substring(0, 90)}...
              <TouchableOpacity onPress={toggleDescription}>
                <Text style={styles.readMoreText}>
                  {showFullDescription ? 'Read Less' : 'Read More'}
                </Text>
              </TouchableOpacity>
            </Text> */}
          <View>
            <Text style={styles.productDescription}>
              {getDescriptionText()}
              {!showFullDescription &&
                product.description.length > descriptionLimit && (
                  <Text style={styles.readMoreText} onPress={toggleDescription}>
                    {' '}
                    Read more
                  </Text>
                )}
            </Text>

            {showFullDescription && (
              <TouchableOpacity onPress={toggleDescription}>
                <Text style={styles.readMoreText}>Read Less</Text>
              </TouchableOpacity>
            )}
          </View>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  ImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: SIZES.height * 0.3,
    backgroundColor: COLORS.lightGray10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  productImage: {
    width: '60%',
    height: '80%',
  },
  price: { 
    color: COLORS.gray30,
    // marginRight: SIZES.width * 0.11,

  },
  priceContainer: {
    width: '30%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent : 'center'
  },
  LikeButton: {
    backgroundColor: 'white',
    width: SIZES.width * 0.09,
    height: SIZES.height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    right: 25,
  },

  QuantityView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.lightGray10,
    borderWidth: 0.5,
  },

  SizeView: {
    backgroundColor: COLORS.lightGray10,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.04,
    borderRadius: 10,
    marginHorizontal: SIZES.width * 0.02,
    // borderColor: COLORS.lightGray10,
    // borderWidth: 0.5,
  },

  detailsContainer: {
    padding: SIZES.width * 0.05,
    paddingLeft: SIZES.width * 0.06,
  },
  productName: {
    fontSize: SIZES.width * 0.04,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: SIZES.height * 0.005,
  },
  productPrice: {
    fontSize: SIZES.width * 0.045,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.height * 0.01,
    marginLeft : SIZES.width * 0.06
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.height * 0.02,
  },
  ratingText: {
    marginLeft: SIZES.width * 0.02,
    color: COLORS.gray30,
  },
  reviewsText: {
    marginLeft: SIZES.width * 0.02,
    color: COLORS.lightGray,
    fontSize: SIZES.width * 0.03,
  },
  // productDescription: {
  //   fontSize: SIZES.width * 0.032,
  //   color: COLORS.gray30,
  //   marginBottom: SIZES.height * 0.01,
  // },
  description: {
    fontSize: SIZES.width * 0.035,
    color: COLORS.black,
    marginBottom: SIZES.height * 0.01,
    fontWeight: '800',
  },
  counterContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.height * 0.02,
    marginLeft: SIZES.width * 0.02,
  },
  // readMoreText: {
  //   color: COLORS.blue,
  //   // marginTop: SIZES.height * 0.01,
  //   lineHeight: SIZES.height * 0.025,
  //   fontSize: SIZES.width * 0.03,
  //   fontWeight: '600',
  // },

  productDescription: {
    fontSize: SIZES.width * 0.035,
    color: COLORS.gray,
    // lineHeight: SIZES.height * 0.025,
  },
  readMoreText: {
    color: COLORS.blue,
    fontSize: SIZES.width * 0.035,
    fontWeight: '600',
  },
});

export default ProductDetail;
