import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../Constants/theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputBox from '../Components/InputBox';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Login = ({navigation}) => {
  const [postdata, setpostdata] = useState({
    email: '',
    password: '',
  });
//   const [showPassword, setShowPassword] = useState(true);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  return (

    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View>

      
      <Text style={styles.heading}>Log In</Text>
      <Formik
        validationSchema={loginSchema}
        initialValues={postdata}
        onSubmit={() => navigation.navigate('BottomTabNavigator')}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          err
        }) => {
          return (
            <>
              <View style={{marginTop: SIZES.height * 0.025}}>
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
                    marginTop: SIZES.height * 0.02,
                    marginBottom: SIZES.height * 0.01,
                    paddingHorizontal: SIZES.height * 0.02,
                    color: 'black',
                  }}
                  colorName={'black'}
                  FontistoName={'email'}
                />
              </View>

              <View>
                <InputBox
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  value={values?.password}
                  errors={touched?.password && errors?.password}
                  errorMsg={errors?.password}
                  errorTextstyle={{
                    color: COLORS.white,
                    fontSize: SIZES.width * 0.035,
                  }}
                  label="Password"
                  labelStyle={{
                    marginTop: SIZES.height * 0.02,
                    marginBottom: SIZES.height * 0.01,
                    paddingHorizontal: SIZES.height * 0.02,
                    color: 'black',
                  }}
                  colorName={'black'}
                  FeatherName={'lock'}
                />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text
                  style={{
                    color: COLORS.primary,
                    marginTop: SIZES.height * 0.01,
                    textAlign: 'right',
                    marginRight: SIZES.width * 0.08,
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    width: SIZES.width * 0.2,
                  }}>
                  Log In
                </Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>

      <View style={{alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            width: SIZES.width * 0.3,
            marginTop : SIZES.height * 0.2
          }}>
          Or Login with
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={require('../assets/Images/facebook.jpg')}
              style={{
                height: SIZES.height * 0.055,
                width: SIZES.width * 0.12,
                marginTop: SIZES.height * 0.02,
                marginRight: SIZES.width * 0.1,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/Images/google.png')}
              style={{
                height: SIZES.height * 0.07,
                width: SIZES.width * 0.12,
                marginTop: SIZES.height * 0.015,
              }}
            />
          </TouchableOpacity>
        </View>
     

      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.width * 0.012,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom : SIZES.height * 0.05
        //   backgroundColor: 'red',
        }}>
        <Text style={{fontSize: SIZES.width * 0.035, color: COLORS.black}}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: COLORS.primary, width: SIZES.width * 0.2 , fontSize: SIZES.width * 0.04,marginLeft : SIZES.width * 0.01}}>
             Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'black',
    fontSize: SIZES.height * 0.03,
    marginTop: SIZES.height * 0.03,
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
export default Login;
