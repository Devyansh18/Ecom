import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS, SIZES} from '../Constants/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from '../screens/ProductDetail';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',

        tabBarStyle: styles.tabBarIconStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              size={25}
              style={{color: focused ? COLORS.primary : COLORS.gray60}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="shopping-cart"
              size={25}
              style={{color: focused ? COLORS.primary : COLORS.gray60}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="heart"
              size={25}
              style={{color: focused ? COLORS.primary : COLORS.gray60}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome6
              name="user-large"
              size={24}
              style={{color: focused ? COLORS.primary : COLORS.gray60}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIconStyle: {
    alignItems: 'center',
    height: SIZES.height * 0.07,
  },
});

export default BottomTabNavigator;
