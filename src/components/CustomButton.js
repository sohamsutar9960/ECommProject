import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {PRIMARY} from '../assets/colors/colors';
import {useTheme} from '@react-navigation/native';

const CustomButton = ({onPress, title}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: colors.PRIMARY,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
