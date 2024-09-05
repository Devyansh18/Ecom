import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../Constants/theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputBox from '../Components/InputBox';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CheckBox from 'react-native-check-box';

const Signup = ({navigation}) => {
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const [postdata, setpostdata] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: '',
  });
  const [showPassword, setShowPassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
    rePassword: yup.string().required('Re-Type Password is required'),
    name: yup.string().required('Name is required'),
  });

  return (
    <ScrollView
    //   behavior="height"
      style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View>
          <Text style={styles.heading}>Sign Up</Text>
          <Formik
            validationSchema={loginSchema}
            initialValues={postdata}
            onSubmit={values => navigation.navigate('Login')}>
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
                  <View style={{marginTop: SIZES.height * 0.01}}>
                    <InputBox
                      placeholder="Enter Your Name"
                      onChangeText={handleChange('name')}
                      value={values?.name}
                      errors={touched?.name && errors?.name}
                      errorMsg={errors?.name}
                      errorTextstyle={{
                        color: COLORS.white,
                        fontSize: SIZES.width * 0.035,
                      }}
                      label="Name"
                      labelStyle={{
                        marginTop: SIZES.height * 0.01,
                        marginBottom: SIZES.height * 0.005,
                        paddingHorizontal: SIZES.height * 0.02,
                        color: 'black',
                      }}
                      colorName={'black'}
                      FeatherName={'user'}
                    />
                  </View>

                  <View>
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
                        marginTop: SIZES.height * 0.015,
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
                      placeholder="Enter Your Password"
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
                        marginTop: SIZES.height * 0.015,
                        marginBottom: SIZES.height * 0.01,
                        paddingHorizontal: SIZES.height * 0.02,
                        color: 'black',
                      }}
                      colorName={'black'}
                      FeatherName={'lock'}
                    />
                  </View>

                  <View>
                    <InputBox
                      placeholder="Re-Type Your Password"
                      rightimgstyle={{tintColor: COLORS.gray80}}
                      secureTextEntry={true}
                      onChangeText={handleChange('rePassword')}
                      value={values?.rePassword}
                      errors={touched?.rePassword && errors?.rePassword}
                      errorMsg={errors?.rePassword}
                      errorTextstyle={{
                        color: COLORS.white,
                        fontSize: SIZES.width * 0.035,
                      }}
                      label="Re-Type Your Password"
                      labelStyle={{
                        marginTop: SIZES.height * 0.015,
                        marginBottom: SIZES.height * 0.01,
                        paddingHorizontal: SIZES.height * 0.02,
                        color: 'black',
                      }}
                      colorName={'black'}
                      FeatherName={'lock'}
                    />
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        marginLeft: SIZES.width * 0.05,
                        marginTop: SIZES.height * 0.01,
                      }}>
                      <CheckBox
                        //   style={{flex: 1, padding: 10}}
                        onClick={toggleCheckBox}
                        isChecked={isChecked}
                        disable={false}
                        checkBoxColor={COLORS.primary}
                        checkedCheckBoxColor={COLORS.primary}
                      />
                    </View>

                    <Text
                      style={{
                        color: COLORS.black,
                        width: SIZES.width * 0.3,
                        marginTop: SIZES.height * 0.01,
                        marginLeft: SIZES.width * 0.02,
                        // marginTop: SIZES.height * 0.01,
                        //   textAlign: 'right',
                        //   marginRight: SIZES.width * 0.08,
                      }}>
                      I agree with the
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          color: COLORS.primary,
                          marginTop: SIZES.height * 0.01,
                          // marginTop: SIZES.height * 0.01,
                          //   textAlign: 'right',
                          //   marginRight: SIZES.width * 0.08,
                        }}>
                        terms and conditions
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        width: SIZES.width * 0.2,
                      }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </>
              );
            }}
          </Formik>

          <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                width: SIZES.width * 0.3,
                marginTop: SIZES.height * 0.04,
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
                paddingBottom : SIZES.height * 0.02
                //   backgroundColor: 'red',
              }}>
              <Text
                style={{
                  fontSize: SIZES.width * 0.035,
                  color: COLORS.black,
                  width: SIZES.width * 0.48,
                }}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: COLORS.primary,
                    width: SIZES.width * 0.2,
                    fontSize: SIZES.width * 0.04,
                    marginLeft: SIZES.width * 0.01,
                  }}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
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
export default Signup;
