import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';

import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Toast from 'react-native-toast-message';

import Categories from '../components/Home/Categories';
import BottomTabs from '../components/Home/BottomTabs';
import ProductList from '../components/Home/ProductList';
import Header from '../components/Home/Header';

const {width} = Dimensions.get('window');
const ITEM_SIZE = width / 2 - 20; // Adjusting for padding

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again later...',
        position: 'top',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{flex: 1, backgroundColor: '#eee', padding: 10}}>
        {renderSkeleton()}
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#4E2A84" />
      <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
        <View
          style={{
            backgroundColor: '#4E2A84',
          }}>
          <Header />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <ProductList products={products} />
        </ScrollView>
        <BottomTabs />
      </SafeAreaView>
    </>
  );
}

const renderSkeleton = () => {
  return (
    <>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={width} height={80} borderRadius={8} />
      </SkeletonPlaceholder>
      <View style={styles.gridContainer}>
        {Array.from({length: 8}).map((_, index) => (
          <View key={index} style={styles.gridItem}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={ITEM_SIZE}
                height={ITEM_SIZE}
                borderRadius={8}
              />
              <SkeletonPlaceholder.Item
                marginTop={10}
                width={ITEM_SIZE * 0.6}
                height={15}
                borderRadius={4}
              />
            </SkeletonPlaceholder>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gridItem: {
    marginBottom: 20,
    width: ITEM_SIZE,
  },
  itemBox: {
    backgroundColor: '#FFFFFF',
    height: ITEM_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
