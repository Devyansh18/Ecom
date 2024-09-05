import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../Constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
const InputBox = ({
  placeholder,
  search,
  maxLength,
  keyboardType,
  label,
  onChangeText,
  value,
  editable,
  icon,
  multiline,
  textAlignVertical,
  numberOfLines,
  labelStyle,
  inputboxstyle,
  errors,
  errorstyle,
  secureTextEntry,
  img,
  iconStyle,

  borderbox,
  rightimgstyle,
  placeholderstyle,
  placeholderTextColor,
  FontistoName,
  FeatherName,
  colorName
}) => {
  const [visible, setVisible] = useState(true);
  const [show, setshow] = useState(false);

  return (
    <View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={[styles.box1]}>
        <Fontisto name={FontistoName} size={20} color={colorName}  style={{position : 'absolute', left : 15}}/>
        <Feather name={FeatherName} size={20} color={colorName}  style={{position : 'absolute', left : 15}}/>
        <TextInput
          placeholder={placeholder}
          style={[
            styles.placeholdera,
            icon && {width: SIZES.width * 0.8},
            placeholderstyle,
          ]}
          maxLength={maxLength}
          editable={editable}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor || COLORS.gray20}
          onChangeText={onChangeText}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          // textAlignVertical='top'

          textAlignVertical={textAlignVertical}
          secureTextEntry={secureTextEntry && visible}
        />

        {img && <Image source={img} style={[styles.image, rightimgstyle]} />}

        {icon && (
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible), setshow(!show);
            }}
            style={[iconStyle]}>
            <Ionicons
              name={show ? 'eye' : 'eye-off'}
              size={20}
              color={COLORS.gray70}
              style={{}}
            />
          </TouchableOpacity>
        )}
      </View>
      {errors ? (
        <Text
          style={[
            styles.error,
            borderbox && {marginLeft: SIZES.width * 0.02},
            errorstyle,
          ]}>
          {errors}
        </Text>
      ) : null}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  box1: {
    borderColor: COLORS.gray20,
    borderWidth: 1.5,
    alignSelf: 'center',
    //   marginBottom: SIZES.height * 0.008,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 35,
    width: SIZES.width * 0.88,
    height: SIZES.height * 0.07,
  },
  placeholdera: {
    fontSize: SIZES.width * 0.032,
    color: COLORS.black,
    paddingLeft: SIZES.width * 0.03,
    marginBottom: -3,
    width: SIZES.width * 0.78,
    marginLeft : SIZES.width * 0.08,
  },
  label: {
    fontSize: 14,

    color: COLORS.gray40,
    marginLeft: SIZES.width * 0.02,
    width: SIZES.width * 0.88,
  },

  icon: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.gray60,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: SIZES.height * 0.005,
    marginLeft: SIZES.width * 0.07,
    // marginBottom: SIZES.height * 0.02,
  },
  image: {
    width: SIZES.width * 0.05,
    height: SIZES.height * 0.023,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  // -----------inputborderbox
  inputborderbox: {
    marginVertical: SIZES.height * 0.01,
    borderWidth: 4,
    borderColor: COLORS.black,
    elevation: 0,
    width: SIZES.width * 0.93,
  },
});
