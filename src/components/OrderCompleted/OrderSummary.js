import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderSummary = ({orderDetails}) => {
  const {items, total, deliveryFee} = orderDetails;

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>
        ₹{item.price} x {item.quantity}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.summaryTitle}>Order Summary</Text>

      {/* List of Ordered Items */}
      {items.map((item, index) => {
        return <View key={index}>{renderItem({item})}</View>;
      })}

      {/* Total and Delivery Fee */}
      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>₹{total}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Delivery Fee</Text>
          <Text style={styles.value}>₹{deliveryFee}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.totalLabel]}>Total</Text>
          <Text style={[styles.value, styles.totalValue]}>
            ₹{total + deliveryFee}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    elevation: 2,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#555',
    width: '75%',
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalValue: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});

export default OrderSummary;
