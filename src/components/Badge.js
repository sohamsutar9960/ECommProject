import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function Badge() {
  const cartItems = useSelector(state => state.cart.cartItems); // Access cart items from state

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  if (totalQuantity === 0) return null;

  return (
    <View style={styles.circle}>
      <Text style={styles.count}>{totalQuantity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 18, //half radius will make it cirlce,
    backgroundColor: '#FF4081',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    top: -5,
  },
  count: {color: '#FFF'},
});
