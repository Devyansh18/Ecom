import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {COLORS, SIZES} from '../../Constants/theme';
import images from '../../Constants/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductItemCard = ({itemName, price, rating, imageUrl,productId,   isFavorite,
  onToggleFavorite,onPressContainer}) => {
  // const [isFavorite, setIsFavorite] = useState(false);


  // useEffect(() => {
  //   checkIfFavorite();
  // }, []);

  // const checkIfFavorite = async () => {
  //   const favorites = await AsyncStorage.getItem('favorites');
  //   if (favorites) {
  //     const favoriteArray = JSON.parse(favorites);
  //     setIsFavorite(favoriteArray.some(item => item.productId === productId));
  //   }
  // };


  // const handleFavoritePress = async () => {
  //   const favorites = await AsyncStorage.getItem('favorites');
  //   let favoriteArray = favorites ? JSON.parse(favorites) : [];

  //   if (isFavorite) {
  //     favoriteArray = favoriteArray.filter(item => item.productId !== productId);
  //   } else {
  //     favoriteArray.push({ itemName, price, rating, imageUrl, productId });
  //   }

  //   await AsyncStorage.setItem('favorites', JSON.stringify(favoriteArray));
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPressContainer} >
      <View style={styles.imageContainer}>
        {/* heart icon with position  */}
        <TouchableOpacity onPress={onToggleFavorite}>   
          <AntDesign
            name={ 'heart'}
            size={26}
            style={{color: isFavorite ? 'red' : COLORS.lightGray, position: 'absolute', left: 40, bottom: -5}}
          />
        </TouchableOpacity>

        <Image
          source={{uri: imageUrl}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.productName} numberOfLines={1}>
        {itemName}
      </Text>
      <View style={{flexDirection: 'row', alignitems: 'center'}}>
        <AntDesign name="star" size={16} style={{color: '#FFD700'}} />
        <Text style={{color: COLORS.lightGray, fontSize: 12}}>{rating}</Text>
      </View>
      <Text style={styles.price}>$ {price}</Text>
      <TouchableOpacity>
        <AntDesign
          name="pluscircle"
          size={30}
          style={{
            color: '#1B88E2',
            position: 'absolute',
            bottom: 2,
            right: 2,
          }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    marginTop: 15,
    width: SIZES.width * 0.41,
    elevation: 4,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 8,
    marginLeft: SIZES.width * 0.005,
    marginRight: SIZES.width * 0.03,
  },
  imageContainer: {
    backgroundColor: COLORS.white,
    height: SIZES.height * 0.13,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SIZES.width * 0.6,
    height: SIZES.height * 0.07,
  },
  productName: {
    color: COLORS.lightGray,
    fontSize: SIZES.width * 0.03,
    marginTop: SIZES.height * 0.01,
  },
  price: {
    color: 'black',
    fontSize: 14,
    marginTop: SIZES.height * 0.005,
  },
});

export default ProductItemCard;
