import React, {useRef, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import {useTheme} from '@react-navigation/native';

const SignUp = ({navigation}) => {
  const {colors} = useTheme();

  // Animation references
  const helloAnimation = useRef(new Animated.Value(0)).current;
  const inputsAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animating the "Hello" text
    Animated.timing(helloAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Animating the input fields
    Animated.stagger(200, [
      Animated.timing(inputsAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [helloAnimation, inputsAnimation]);

  return (
    <View style={[styles.container, {backgroundColor: colors.BACKGROUND}]}>
      <ScrollView>
        <View style={styles.topImageContainer}>
          <Image
            source={require('../assets/images/topVector.png')}
            style={styles.topImage}
          />
        </View>
        {/* Hello Text */}
        <Animated.View
          style={{
            opacity: helloAnimation,
            transform: [
              {
                translateY: helloAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}>
          <Text style={[styles.helloText, {color: colors.TEXT_HEADING}]}>
            Welcome,
          </Text>
        </Animated.View>
        <View>
          <Text style={[styles.signInText, {color: colors.TEXT}]}>
            Create your account instantly!
          </Text>
        </View>

        {/* Form Inputs */}
        <View style={styles.formContainer}>
          {/* FULLNAME */}
          <Animated.View
            style={{
              opacity: inputsAnimation,
              transform: [
                {
                  translateY: inputsAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}>
            <CustomTextInput
              placeholder="Fullname"
              left={
                <Image
                  source={require('../assets/icons/user.png')}
                  style={styles.icon}
                  tintColor={colors.PRIMARY_TINT}
                />
              }
            />
          </Animated.View>

          {/* EMAIL */}
          <Animated.View
            style={{
              opacity: inputsAnimation,
              transform: [
                {
                  translateY: inputsAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}>
            <CustomTextInput
              placeholder="Email"
              left={
                <Image
                  source={require('../assets/icons/email.png')}
                  style={styles.icon}
                  tintColor={colors.PRIMARY_TINT}
                />
              }
            />
          </Animated.View>

          {/* PASSWORD */}
          <Animated.View
            style={{
              opacity: inputsAnimation,
              transform: [
                {
                  translateY: inputsAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}>
            <CustomTextInput
              placeholder="Password"
              secureTextEntry
              left={
                <Image
                  source={require('../assets/icons/lock.png')}
                  style={styles.icon}
                  tintColor={colors.PRIMARY_TINT}
                />
              }
              right={
                <Image
                  source={require('../assets/icons/eyeclose.png')}
                  style={styles.icon}
                  tintColor={colors.PRIMARY_TINT}
                />
              }
            />
          </Animated.View>

          {/* RE-ENTER PASSWORD */}
          <Animated.View
            style={{
              opacity: inputsAnimation,
              transform: [
                {
                  translateY: inputsAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}>
            <CustomTextInput
              placeholder="Re-Enter Password"
              secureTextEntry
              left={
                <Image
                  source={require('../assets/icons/lock.png')}
                  style={styles.icon}
                  tintColor={colors.PRIMARY_TINT}
                />
              }
              right={
                <Image
                  source={require('../assets/icons/eyeclose.png')}
                  style={styles.icon}
                  tintColor={colors.PRIMARY_TINT}
                />
              }
            />
          </Animated.View>

          {/* LOGIN BUTTON */}
          <Animated.View
            style={{
              opacity: inputsAnimation,
              transform: [
                {
                  translateY: inputsAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            }}>
            <View style={{marginVertical: 20}}>
              <CustomButton
                title="Create Account"
                onPress={() => console.log('Login')}
              />
            </View>
          </Animated.View>
        </View>

        {/* BOTTOM CONTAINER */}
        <View
          style={[
            styles.bottomContainer,
            {backgroundColor: colors.HIGHLIGHT_GREY},
          ]}>
          <View style={styles.signUpContainer}>
            <Text style={{color: colors.TEXT}}>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text style={[styles.loginHereText, {color: colors.LINK}]}>
                Login here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImageContainer: {},
  topImage: {
    width: '100%',
    height: 130,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: '500',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  icon: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
  },
  bottomContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
