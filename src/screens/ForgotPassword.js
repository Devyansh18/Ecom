import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../Constants/theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputBox from '../Components/InputBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ForgotPassword = ({navigation}) => {
  const [postdata, setpostdata] = useState({
    email: '',
  });
  //   const [showPassword, setShowPassword] = useState(true);

  const emailSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
  });
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white' , }}>
    <View style={{    paddingBottom :SIZES.height * 0.02,}}>
     
        <Ionicons
          name={"chevron-back"}
          color={'gray'}
          Size= {50}
          style={{position: 'absolute', left: 15, top : 38}}
        />
        <Text style={styles.heading}>Forgot Password</Text>
   
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/Images/onboard2.jpg')}
      />
      <Formik
        validationSchema={emailSchema}
        initialValues={postdata}
        onSubmit={() => navigation.navigate('Login')}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => {
          return (
            <>
              <View style={{marginTop: SIZES.height * 0.0}}>
                <InputBox
                  placeholder="Your Email Address"
                  rightimgstyle={{tintColor: COLORS.gray80}}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  value={values?.email}
                  errors={touched?.email && errors?.email}
                  errorMsg={errors?.email}
                  errorTextstyle={{
                    color: COLORS.white,
                    fontSize: SIZES.width * 0.035,
                  }}
                  label="E-mail"
                  labelStyle={{
                    // marginTop: SIZES.height * 0.02,
                    marginBottom: SIZES.height * 0.01,
                    paddingHorizontal: SIZES.height * 0.02,
                    color: 'black',
                  }}
                  colorName={'black'}
                  FontistoName={'email'}
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    width: SIZES.width * 0.2,     
                  }}>
                  Get Code
                </Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'black',
    fontSize: SIZES.height * 0.025,
    marginTop: SIZES.height * 0.03,
  },
  image: {
    height: SIZES.height * 0.4,
    width: SIZES.width * 1,
    paddingTop: SIZES.height * 0.1,
  },
  button: {
    alignSelf: 'center',
    marginTop: SIZES.height * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 35,
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.06,
 
  },
});
export default ForgotPassword;
