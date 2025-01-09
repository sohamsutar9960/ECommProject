import React from 'react';
import {View, StyleSheet, FlatList, StatusBar} from 'react-native';

import {useSelector} from 'react-redux';

import DeliveryInfo from '../components/Cart/DeliveryInfo';
import CartItem from '../components/Cart/CartItem';
import OfferSection from '../components/Cart/OfferSection';
import PaymentCTA from '../components/Cart/PaymentCTA';
import EmptyCart from '../components/Cart/EmptyCart';

import CustomHeader from '../components/CustomHeader';

const Cart = () => {
  const totalSaved = 304; // Example data
  const shopMoreAmount = 23; // Amount required for offers

  const cartItems = useSelector(state => state.cart.cartItems); // Access cart items from state

  const totalPrice = cartItems.reduce((acc, item) => {
    let price = acc + item.price * item.quantity;
    return Math.round(price * 100) / 100;
  }, 0);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'#4E2A84'}
        hidden={false}
      />
      <View style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
        <CustomHeader title="Cart" />
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <DeliveryInfo
              totalSaved={totalSaved}
              shopMoreAmount={shopMoreAmount}
            />
            <FlatList
              data={cartItems}
              keyExtractor={item => item.id}
              renderItem={({item}) => <CartItem item={item} />}
              ListFooterComponent={() => (
                <OfferSection shopMoreAmount={shopMoreAmount} />
              )}
            />
            <PaymentCTA totalPrice={totalPrice} />
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default Cart;
