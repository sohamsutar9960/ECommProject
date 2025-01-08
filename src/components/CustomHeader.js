import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({
  title,
  showBackButton = true,
  onBackPress,
  rightIcon,
  onRightPress,
  backgroundColor = '#ffffff',
  textColor = '#333333',
}) => {
  const navigation = useNavigation();

  // Default back button handler if not provided
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.headerContainer, {backgroundColor}]}>
      {/* Back Button */}
      {showBackButton ? (
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Image
            source={require('../assets/icons/back.png')} // Replace with your back icon path
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}

      {/* Title */}
      <Text style={[styles.title, {color: textColor}]} numberOfLines={1}>
        {title}
      </Text>

      {/* Right Action Icon */}
      {rightIcon ? (
        <TouchableOpacity style={styles.rightButton} onPress={onRightPress}>
          <Image source={rightIcon} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}
    </View>
  );
};

CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool,
  onBackPress: PropTypes.func,
  rightIcon: PropTypes.any,
  onRightPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    padding: 10,
  },
  rightButton: {
    padding: 10,
  },
  spacer: {
    width: 40, // Ensure alignment when no button is present
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
