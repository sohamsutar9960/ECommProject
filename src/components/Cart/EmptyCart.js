import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {navigationRef} from '../../utils/NavigationUtils';

const EmptyCart = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Bounce Animation for the illustration
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -20, // Moves up
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0, // Moves back to original position
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Fade-in animation for text
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [bounceAnim, fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Animated Illustration */}
      <Animated.View style={{transform: [{translateY: bounceAnim}]}}>
        <Image
          source={require('../../assets/images/Empty-Cart.png')} // Replace with your own image path
          style={styles.image}
        />
      </Animated.View>

      {/* Animated Text */}
      <Animated.View style={{opacity: fadeAnim}}>
        <Text style={styles.title}>Your Cart is Empty!</Text>
        <Text style={styles.subtitle}>
          Looks like you haven’t added anything yet.
        </Text>
      </Animated.View>

      {/* Shop Now Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigationRef.navigate('Home')}>
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF4081',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EmptyCart;
