import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeliveryInfo = ({totalSaved, shopMoreAmount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.savedText}>SAVED ₹{totalSaved}</Text>
      <Text style={styles.shopMoreText}>
        Shop for ₹{shopMoreAmount} more to save ₹25 on delivery fee
      </Text>
      <View style={styles.deliveryInfo}>
        <Icon name="clock-outline" size={20} color="#4caf50" />
        <Text style={styles.deliveryText}>Delivery in 7 mins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  savedText: {
    color: '#4caf50',
    fontWeight: 'bold',
    fontSize: 16,
  },
  shopMoreText: {
    color: '#333',
    fontSize: 14,
    marginTop: 5,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  deliveryText: {
    marginLeft: 8,
    color: '#333',
    fontSize: 14,
  },
});

export default DeliveryInfo;
