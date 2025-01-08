import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const items = [
  {
    image: require('../../assets/images/Mens-Clothing.png'),
    text: `Men's clothing`,
  },
  {
    image: require('../../assets/images/Womens-Clothing.png'),
    text: `Womens's clothing`,
  },
  {
    image: require('../../assets/images/Electronics.png'),
    text: 'Electronics',
  },
  {
    image: require('../../assets/images/Jwellery.png'),
    text: 'Jewelery',
  },
  {
    image: require('../../assets/images/Deals.png'),
    text: 'Deals',
  },
];

export default function Categories() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              marginRight: 10,
              width: 85,
            }}>
            <Image
              source={item.image}
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                backgroundColor: '#EFEFEF',
                borderRadius: 10,
                marginBottom: 5,
              }}
            />
            <Text
              numberOfLines={2}
              style={{
                fontSize: 13,
                fontWeight: '700',
                color: 'black',
                textAlign: 'center',
              }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
