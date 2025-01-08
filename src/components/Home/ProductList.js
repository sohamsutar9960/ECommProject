import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
  return (
    <View style={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default ProductList;
