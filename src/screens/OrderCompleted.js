import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import OrderSummary from '../components/OrderCompleted/OrderSummary';
import SuccessAnimation from '../components/OrderCompleted/SuccessAnimation';
import {navigationRef} from '../utils/NavigationUtils';
import CustomHeader from '../components/CustomHeader';

const OrderCompleted = ({route}) => {
  const {orderDetails} = route.params; // Assuming order details are passed through navigation route

  const handleContinueShopping = () => {
    navigationRef.navigate('Home'); // Navigate to home screen
  };

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'#4E2A84'}
        hidden={false}
      />
      <View style={[styles.container, {marginTop: StatusBar.currentHeight}]}>
        <CustomHeader title="Your Order" />
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingVertical: 20}}>
          <View style={styles.content}>
            <SuccessAnimation />
            <Text style={styles.title}>Order Completed!</Text>
            <Text style={styles.subtitle}>Thank you for shopping with us.</Text>

            {/* Order Summary Component */}
            <OrderSummary orderDetails={orderDetails} />

            {/* Continue Shopping Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleContinueShopping}>
              <Text style={styles.buttonText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF4081',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrderCompleted;
