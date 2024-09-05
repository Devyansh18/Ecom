import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductItemCard from '../Components/ProductItemCard.js';
import images from '../Constants/images';
import {COLORS, SIZES} from '../Constants/theme';
import Draw from './draw';
import {accesories, CategoryData} from '../Constants/data';

const Home = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = productId => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(id => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  const isFavorite = productId => favorites.includes(productId);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategory(json))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  const navigateToProductDetail = item => {
    navigation.navigate('ProductDetail', {product: item});
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topRowContainer}>
        <View>
          <Image source={images.HkLogo} style={styles.profileImage} />
        </View>
        <View
          style={{width: SIZES.width * 0.5, marginLeft: SIZES.width * 0.03}}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: SIZES.width * 0.04,
            }}>
            Devyansh Khatri
          </Text>
        </View>
        <TouchableOpacity style={{position: 'absolute', right: 80, top: 30}}>
          <AntDesign name="search1" size={26} color={COLORS.gray1} />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', right: 30, top: 30}}>
          <Ionicons name="notifications" size={26} color={COLORS.gray1} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingHorizontal: SIZES.width * 0.03}}>
        <Draw />

        <Text style={styles.categoryText}>Category</Text>
        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Text style={styles.itemText}>{item} </Text>
            </TouchableOpacity>
          )}
        />
        <View>
          <FlatList
            data={product}
            numColumns={2}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.ProductListContainer}
            renderItem={({item}) => (
              <ProductItemCard
                onPressContainer={() => navigateToProductDetail(item)}
                itemName={item.title}
                rating={item?.rating?.rate?.toString()}
                price={item.price}
                imageUrl={item?.image}
                onToggleFavorite={() => handleToggleFavorite(item.id)}
                isFavorite={isFavorite(item.id)}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: SIZES.height * 0.0005,
    paddingHorizontal: SIZES.width * 0.03,
  },
  profileImage: {
    height: SIZES.height * 0.05,
    width: SIZES.width * 0.11,
  },
  topRowContainer: {
    flexDirection: 'row',
    padding: SIZES.height * 0.02,
    paddingLeft: SIZES.height * 0.01,
  },
  welcomeView: {},
  welcomeText: {
    color: COLORS.gray30,
  },
  categoryText: {
    color: 'black',
    fontSize: SIZES.width * 0.045,
  },
  itemContainer: {
    backgroundColor: COLORS.lightGray10,
    borderRadius: 20,
    marginTop: SIZES.height * 0.015,
    marginRight: SIZES.width * 0.02,
    paddingHorizontal: SIZES.width * 0.03,
    paddingVertical: SIZES.height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: SIZES.width * 0.03,
  },
  listContainer: {
    paddingHorizontal: 0, // Optional: Add padding on left and right sides
  },

  ProductListContainer: {},
});

export default Home;
