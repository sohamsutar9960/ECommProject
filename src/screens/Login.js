import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useContext, useEffect, useRef} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import {GREY, HIGHLIGHT_GREY, PRIMARY_TINT} from '../assets/colors/colors';
import CustomButton from '../components/CustomButton';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const Login = ({navigation}) => {
  const {colors} = useTheme();
  const {login} = useContext(AuthContext);

  // Animation references
  const fadeInAnim = useRef(new Animated.Value(0)).current; // for opacity
  const slideUpAnim = useRef(new Animated.Value(50)).current; // for vertical position
  const slideLeftAnim = useRef(new Animated.Value(50)).current; // for horizontal position
  const slideRightAnim = useRef(new Animated.Value(-50)).current; // for horizontal position

  // Trigger animations on component mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeInAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideLeftAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideRightAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeInAnim, slideUpAnim, slideLeftAnim, slideRightAnim]);

  return (
    <View style={[styles.container, {backgroundColor: colors.BACKGROUND}]}>
      <ScrollView>
        {/* TOP IMAGE */}
        <View style={styles.topImageContainer}>
          <Image
            source={require('../assets/images/topVector.png')}
            style={styles.topImage}
          />
        </View>

        <Animated.View
          style={[
            styles.helloContainer,
            {opacity: fadeInAnim, transform: [{translateY: slideUpAnim}]},
          ]}>
          <Text style={[styles.helloText, {color: colors.TEXT_HEADING}]}>
            Hello
          </Text>
        </Animated.View>

        <View>
          <Text style={[styles.signInText, {color: colors.TEXT}]}>
            Log in to your account!
          </Text>
        </View>

        <View style={styles.formContainer}>
          {/* USERNAME */}
          <Animated.View
            style={{
              opacity: fadeInAnim,
              transform: [{translateY: slideUpAnim}],
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
              opacity: fadeInAnim,
              transform: [{translateY: slideUpAnim}],
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

          {/* FORGOT PASSWORD */}
          <View style={styles.forgotPassContainer}>
            <View style={styles.checkboxContainer}>
              <Text style={{color: colors.TEXT}}>Remember me</Text>
            </View>
            <Pressable onPress={() => console.log('Forgot Password')}>
              <Text style={{color: colors.TEXT}}>Forgot Password?</Text>
            </Pressable>
          </View>

          {/* LOGIN BUTTON */}
          <Animated.View
            style={{
              opacity: fadeInAnim,
              transform: [{translateY: slideUpAnim}],
            }}>
            <CustomButton title="Login" onPress={() => login()} />
          </Animated.View>

          {/* DIVIDER */}
          <View style={styles.dividerContainer}>
            <View style={[styles.divider, {borderBottomColor: colors.GREY}]} />
            <Text style={[styles.orText, {color: GREY}]}>or</Text>
            <View style={[styles.divider, {borderBottomColor: colors.GREY}]} />
          </View>
        </View>

        {/* OTHER LOGIN OPTIONS */}
        <View style={styles.middleContainer}>
          <Text style={{color: colors.TEXT}}>Login with</Text>
          <View style={styles.otherOptionContainer}>
            <Animated.View
              style={{
                opacity: fadeInAnim,
                transform: [{translateX: slideLeftAnim}],
              }}>
              <TouchableOpacity style={styles.otherOption}>
                <Image
                  source={require('../assets/icons/facebook.png')}
                  style={[styles.icon, {marginRight: 3}]}
                  tintColor={colors.PRIMARY_TINT}
                />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeInAnim,
                transform: [{translateY: slideUpAnim}],
              }}>
              <TouchableOpacity style={styles.otherOption}>
                <Image
                  source={require('../assets/icons/google.png')}
                  style={styles.icon}
                  tintColor={colors.PRIMARY_TINT}
                />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeInAnim,
                transform: [{translateX: slideRightAnim}],
              }}>
              <TouchableOpacity style={styles.otherOption}>
                <Image
                  source={require('../assets/icons/apple.png')}
                  style={[styles.icon, {marginRight: 5}]}
                  tintColor={colors.PRIMARY_TINT}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>

        {/* BOTTOM CONTAINER */}
        <View
          style={[
            styles.bottomContainer,
            {backgroundColor: colors.HIGHLIGHT_GREY},
          ]}>
          <View style={styles.signUpContainer}>
            <Text style={{color: colors.TEXT}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text style={[styles.signUpText, {color: colors.LINK}]}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImageContainer: {},
  topImage: {
    width: '100%',
    height: 130,
  },
  helloContainer: {},
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
  forgotPassContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 30,
    flex: 1,
  },
  orText: {
    marginHorizontal: 20,
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  otherOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  otherOption: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: PRIMARY_TINT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontWeight: '600',
    fontSize: 16,
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
