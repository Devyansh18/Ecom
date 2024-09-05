// import {View, Text, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import Splash from './src/screens/Splash';
import OnBoarding from './src/screens/OnBoarding';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Favourite from './src/screens/Favourite';
import ProductDetail from './src/screens/ProductDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {showSplash ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        ) : null}



        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />


  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;