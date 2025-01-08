import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OfferSection = ({shopMoreAmount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Save more with Pass</Text>
      <Text style={styles.subText}>
        Free delivery above ₹99. Add items worth ₹{shopMoreAmount} more
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3e5f5',
    padding: 16,
    marginBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  subText: {
    color: '#666',
    fontSize: 14,
  },
});

export default OfferSection;
