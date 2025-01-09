import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useCartActions from '../../hooks/useCartActions';

const CartItem = ({item}) => {
  const {handleUpdateQuantity} = useCartActions();
  const totalPrice = item.price * item.quantity;

  const QuantityButton = ({onPress, iconName}) => (
    <TouchableOpacity onPress={onPress} style={styles.quantityButton}>
      <MaterialIcons name={iconName} size={20} color="#ff4081" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{uri: item.image, cache: 'force-cache'}} // Replace with actual image URL
          style={styles.image}
        />
        <View style={styles.info}>
          <Text numberOfLines={2} style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.actions}>
          <QuantityButton
            onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
            iconName="remove"
          />
          <Text style={styles.quantity}>{item.quantity}</Text>
          <QuantityButton
            onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
            iconName="add"
          />
        </View>
        <Text numberOfLines={1} style={styles.price}>
          ₹{totalPrice}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 2,
    padding: 10,
  },
  leftContainer: {
    width: '55%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  category: {
    color: '#666',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF1F5',
    marginRight: 10,
    borderRadius: 5,
  },
  quantityButton: {
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantity: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
});

export default memo(CartItem);
