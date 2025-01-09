import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {navigationRef} from '../../utils/NavigationUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import useCartActions from '../../hooks/useCartActions';

const ProductCard = ({product}) => {
  const {handleAddToCart, handleUpdateQuantity} = useCartActions();
  const cartItems = useSelector(state => state.cart.cartItems); // Access cart items from state
  const cartItem = cartItems.find(item => item.id === product.id);

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= product.rating.rate ? 'star' : 'star-border'}
          size={16}
          color="#FFD700" // Gold color for stars
        />,
      );
    }
    return stars;
  };

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
    return (
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() =>
            handleUpdateQuantity(cartItem.id, cartItem.quantity - 1)
          }
          style={styles.substract}>
          <MaterialCommunityIcons name="minus" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={[styles.buttonText]}>{cartItem.quantity}</Text>
        <TouchableOpacity
          onPress={() =>
            handleUpdateQuantity(cartItem.id, cartItem.quantity + 1)
          }
          style={styles.add}>
          <MaterialCommunityIcons name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Pressable
      onPress={() =>
        navigationRef.navigate('ProductDetails', {
          id: product.id,
          name: product.title,
          image: product.image,
          rating: product.rating.rate,
          category: product.category,
          price: product.price,
          review: product.rating.count,
          description: product.description,
        })
      }
      style={styles.card}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text numberOfLines={2} style={styles.name}>
        {product.title}
        {'\n'}
      </Text>
      <View style={styles.ratingContainer}>
        <View style={styles.rateContainer}>{renderStars()}</View>
        <Text style={styles.count}>
          {' ('}
          {product.rating.count}
          {')'}
        </Text>
      </View>
      <Text style={styles.price}>₹{product.price}</Text>
      {cartItem ? <QuantityButton /> : <AddToCartButton />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '49.5%',
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  count: {
    fontSize: 12,
    color: '#666',
  },
  rateContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#FF4081',
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FF4081',
    fontSize: 14,
    fontWeight: 'bold',
  },
  add: {
    backgroundColor: '#FFC9DC',
    width: 50,
    position: 'absolute',
    right: 0.2,
    top: 0.2,
    bottom: 0.2,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  substract: {
    backgroundColor: '#FFC9DC',
    width: 50,
    position: 'absolute',
    left: 0.2,
    top: 0.2,
    bottom: 0.2,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
