import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SuccessAnimation = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <Animated.View
      style={[styles.iconContainer, {transform: [{scale: scaleAnim}]}]}>
      <MaterialIcons name="check-circle" size={120} color="#4CAF50" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginVertical: 20,
  },
});

export default SuccessAnimation;
