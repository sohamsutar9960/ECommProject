import {View} from 'react-native';
import React from 'react';

export default function Divider({
  height,
  marginVertical,
  marginHorizontal,
  backgroundColor,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: marginVertical ? marginVertical : 0,
        marginHorizontal: marginHorizontal ? marginHorizontal : 0,
      }}>
      <View
        style={{
          flex: 1,
          height: height ? height : 1,
          backgroundColor: backgroundColor ? backgroundColor : 'black',
        }}></View>
    </View>
  );
}
