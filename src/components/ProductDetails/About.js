import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {navigationRef} from '../../utils/NavigationUtils';

export default function About(props) {
  const {image, name, category, price, review, rating, description} =
    props.route.params;

  return (
    <View>
      <View style={styles.absolute}>
        <BackButton />
      </View>
      <ProductImage image={image} />
      <ProductInfo name={name} price={price} rating={rating} review={review} />
      <RestaurantDescription category={category} description={description} />
      <RestaurantDescription category={category} description={description} />
      <RestaurantDescription category={category} description={description} />
      <RestaurantDescription category={category} description={description} />
      <RestaurantDescription category={category} description={description} />
      <RestaurantDescription category={category} description={description} />
    </View>
  );
}

const BackButton = () => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigationRef.goBack()}>
      <Image
        source={require('../../assets/icons/back.png')} // Replace with your back icon path
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const ProductImage = props => (
  <View
    style={{
      width: '100%',
      height: 300,
      backgroundColor: '#FFF',
      paddingVertical: 20,
    }}>
    <Image
      resizeMode="center"
      source={{uri: props.image}}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 1,
      }}
    />
  </View>
);

const ProductInfo = props => (
  <View style={[styles.productContainer, {marginTop: -20}]}>
    <View style={{flexDirection: 'row'}}>
      <View style={{width: '80%'}}>
        <Text style={styles.productTitle}>{props.name}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}>
        <View style={styles.rateContainer}>
          <Text style={styles.rating}>{props.rating} ⭐</Text>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.review}>{props.review} ratings</Text>
        </View>
      </View>
    </View>

    <Text style={styles.price}>₹{props.price}</Text>
  </View>
);

const RestaurantDescription = props => (
  <View style={styles.productContainer}>
    <Text style={styles.productTitle}>Category</Text>
    <Text style={[styles.description, {marginBottom: 10}]}>
      {props.category}
    </Text>
    <Text style={styles.productTitle}>Description</Text>
    <Text style={styles.description}>{props.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    zIndex: 999,
    top: 40,
    left: 30,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  productContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.1,
    borderRadius: 2,
    padding: 10,
    paddingVertical: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 15,
    color: 'black',
  },
  rateContainer: {
    height: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 4,
    alignSelf: 'flex-end',
  },
  rating: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FFF',
  },
  reviewContainer: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  },
  review: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 15,
    color: 'black',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    marginHorizontal: 15,
    color: 'black',
  },
});
