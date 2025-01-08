import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Badge from '../Badge';
import {navigationRef} from '../../utils/NavigationUtils';
import useCartActions from '../../hooks/useCartActions';

export default function ViewCart({product}) {
  const {handleAddToCart, handleUpdateQuantity} = useCartActions();
  const cartItems = useSelector(state => state.cart.cartItems); // Access cart items from state

  const AddToCartButton = () => {
    return (
      <TouchableOpacity
        onPress={() => handleAddToCart(product)}
        style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    );
  };

  const QuantityButton = () => {
    const cartItem = cartItems.find(item => item.id === product.id);
    if (!cartItem) return null; // Guard clause to handle missing product
    return (
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            handleUpdateQuantity(cartItem.id, cartItem.quantity - 1)
          }
          style={styles.substract}>
          <MaterialCommunityIcons name="minus" size={28} color="#FFF" />
        </TouchableOpacity>
        <Text style={[styles.buttonText, {fontSize: 20}]}>
          {cartItem.quantity}
        </Text>
        <TouchableOpacity
          onPress={() =>
            handleUpdateQuantity(cartItem.id, cartItem.quantity + 1)
          }
          style={styles.add}>
          <MaterialCommunityIcons name="plus" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  };

  const ViewCartButton = () => {
    const cartItem = cartItems.find(item => item.id === product.id);

    return (
      <TouchableOpacity
        onPress={() => navigationRef.navigate('Cart')}
        style={[
          styles.button,
          styles.viewCartButton,
          {flex: cartItem ? 1 : 0.2},
        ]}>
        <View>
          <Icon name="shopping-cart" size={28} color="#000" />
          <Badge />
        </View>
        {cartItem && (
          <Text style={[styles.buttonText, {color: '#000'}]}> View Cart</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.buttonContainer}>
      {cartItems.length > 0 && <ViewCartButton />}
      {cartItems.some(item => item.id === product.id) ? (
        <QuantityButton />
      ) : (
        <AddToCartButton />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#FF4081',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewCartButton: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    width: 10,
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  substract: {
    width: 10,
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
});
