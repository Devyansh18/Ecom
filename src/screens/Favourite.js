import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import {COLORS, SIZES} from '../Constants/theme';
import ProductItemCard from '../Components/ProductItemCard.js';

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const favorites = await AsyncStorage.getItem('favorites');
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  };

  return (
    <View style={styles.mainView}>
      
      <Header title={'My Favourites'} />
      <Text style={styles.subHeader}>{favorites.length} Products</Text>

      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={item => item.productId.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => <ProductItemCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    // paddingVertical: SIZES.height * 0.0005,
    // paddingHorizontal: SIZES.width * 0.03,
  },
  subHeader: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 20,
        paddingLeft: SIZES.width * 0.06,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default Favourite;
