import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Badge from '../Badge';
import {navigationRef} from '../../utils/NavigationUtils';

const BottomTabs = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.navItem}>
        <Icon name="home" size={28} color="#4E2A84" />
        <Text style={[styles.navText, {color: '#4E2A84'}]}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigationRef.navigate('Cart')}
        style={styles.navItem}>
        <View>
          <Icon name="shopping-cart" size={28} color="#999" />
          <Badge />
        </View>
        <Text style={styles.navText}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
    width: '50%',
  },
  navText: {
    fontSize: 15,
    color: '#999',
    marginTop: 2,
  },
});

export default BottomTabs;
