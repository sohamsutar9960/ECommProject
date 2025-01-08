import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {navigationRef} from '../../utils/NavigationUtils';
import {useSelector} from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';
import Toast from 'react-native-toast-message';
import {RAZORPAY_KEY_ID} from '@env';
import useCartActions from '../../hooks/useCartActions';

const PaymentCTA = () => {
  const {handleRemoveAllFromCart} = useCartActions();
  const cartItems = useSelector(state => state.cart.cartItems); // Access cart items from state
  const totalPrice = cartItems.reduce((acc, item) => {
    let price = acc + item.price * item.quantity;
    return Math.round(price * 100) / 100;
  }, 0);

  const handlePayment = () => {
    let options = {
      currency: 'INR',
      key: `${RAZORPAY_KEY_ID}`,
      amount: totalPrice * 100,
      name: 'E-Commerce App',
      description: 'Order Payment',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar',
      },
      theme: {color: '#4E2A84'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        handleRemoveAllFromCart();
        navigationRef.navigate('OrderCompleted', {
          orderDetails: {
            orderid: data.razorpay_payment_id,
            items: cartItems,
            total: totalPrice,
            deliveryFee: 0,
          },
        });
      })
      .catch(error => {
        // handle failure
        Toast.show({
          type: 'error',
          text1: 'Payment Gateway is not available',
          text2: 'Please try again later...',
          position: 'top',
        });
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePayment()} style={styles.button}>
        <Text style={styles.buttonText}>Click to Pay ₹{totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff4081',
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentCTA;
