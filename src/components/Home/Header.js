import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name="search" size={24} color="#999" />
      <TextInput
        style={styles.input}
        placeholder='Search for "Textured polos men"'
        placeholderTextColor="#999"
        editable={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
});

export default Header;
