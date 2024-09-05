// import { Dimensions } from "react-native";

import { Dimensions } from "react-native";


const {width , height} = Dimensions.get('screen');

export const COLORS = {

    // Primary
    primary: '#0080FF',
    // primary: '#6D7ED9',

    // secondary
   

    // light
    light: "#CDCDCD",
   

    //white 
    white: "#FFFFFF",
    

    // black
    black: "#000000",
    black1: "rgba(100, 100, 100, 1)",
    black25: "rgba(0, 0, 0, 0.25)",
   

    // blue
    blue: "#1080E9",
  

    // grey
    gray: "#616161",
    gray1: "rgba(101, 98, 98, 1)",
    gray10: "rgba(89, 84, 84, 1)",
    // gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",
  

    // lightGray
    lightGray: "#C1C1C1",
    lightGray1: "#DDDDDD",
    lightGray10: "rgba(242, 242, 242, 1)",
    lightGray31: "rgba(196, 196, 196, 0.31)",

    // yellow
    yellow: "#FFC107",

    // orange
    orange: "#FF3D00",

    // green
    green: "#00FF47",
    green10: "rgba(30, 125, 40, 1)",
    green1: "rgba(71, 183, 43, 1)",

}

export const SIZES = {
   width , height
}