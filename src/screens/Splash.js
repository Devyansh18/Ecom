import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

const {width , height} = Dimensions.get('window')




const Splash = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/Images/HkLogo.png')} style= {styles.logo}/>
      <Text style={styles.hText}>
        Hacker<Text style={styles.kText}>Kernel</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        // alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white'
    },
    hText : {
        textAlign : 'center',
      
        color : 'red',
        padding : height * 0.02,
        fontSize : height * 0.03
    },
    kText : {
        textAlign : 'center',
        
        color : 'black',
        padding : height * 0.02,
        fontSize : height * 0.03
    },
    logo : {
        height : height * 0.2,
        width : width * 0.4,
        alignSelf : 'center',
        backgroundColor : 'lightblue'
    }
})

export default Splash