import {View, StatusBar, ScrollView} from 'react-native';
import React from 'react';

import About from '../components/ProductDetails/About';
import ViewCart from '../components/ProductDetails/ViewCart';

export default function ProductDetails({route}) {
  return (
    <View style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <About route={route} />
      </ScrollView>
      <ViewCart product={route.params} />
    </View>
  );
}
