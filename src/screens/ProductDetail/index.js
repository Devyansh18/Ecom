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
import {SizeData} from '../../Constants/data';

const ProductDetail = ({route, navigation}) => {
  const [showFullDescription, setshowFullDescription] = useState(false);
  const [count, setcount] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const descriptionLimit = 75;
  const {product} = route.params;

  const Sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const increment = () => {
    setcount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setcount(prevCount => prevCount - 1);
  };

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
            {Sizes.map(size => {
              return (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.SizeView,
                    selectedSize === size && styles.selectedSize, // Blue border if selected
                  ]}
                  onPress={() => setSelectedSize(size)}>
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize === size && styles.selectedSizeText,
                    ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.description}>Quantity</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={decrement}>
              <AntDesign
                name="minussquareo"
                size={28}
                color={COLORS.lightGray1}
              />
            </TouchableOpacity>
            <View style={styles.QuantityView}>
              <Text style={{color: 'black', textAlign: 'center'}}>{count}</Text>
            </View>
            <TouchableOpacity onPress={increment}>
              <AntDesign name="plussquare" size={28} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>Description</Text>

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.btn, styles.addToCart]}
          // onPress={handleAddToCart}
        >
          <Text style={[styles.buttonText, styles.addtoCarttext]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.buyNowText]}
          // onPress={handleBuyNow}
        >
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
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
  },
  priceContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: COLORS.lightGray10,
    // borderWidth: 0.5,
  },

  selectedSize: {
    borderColor: COLORS.primary,
    borderWidth: 1.5,
    borderCurve: 'circular',
  },

  sizeText: {
    color: COLORS.gray30,
  },
  selectedSizeText: {
    color: COLORS.primary,
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
    marginLeft: SIZES.width * 0.06,
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
  productDescription: {
    fontSize: SIZES.width * 0.035,
    color: COLORS.gray,
  },
  readMoreText: {
    color: COLORS.blue,
    fontSize: SIZES.width * 0.035,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 10,
  },

  btn: {
    borderRadius: 25,
    borderCurve: 'circular',
    width: 170,
    height: 50,
  },
  addToCart: {
    borderColor: '#1977f3',
    borderWidth: 2,
  },
  addtoCarttext: {
    color: '#1977f3',
  },
  buyNowText: {
    backgroundColor: '#1977f3',
  },
});

export default ProductDetail;
