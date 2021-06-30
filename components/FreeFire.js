import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FreeFire = (data) => {
  console.log(data.data.title);
  return (
    <View style={styles.container}>
      <Image source={data.data.image} style={styles.imgStyle} />
      <Text style={styles.textcolor}>{data.data.title}</Text>
    </View>
  );
};

export default FreeFire;
const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    height: 200,
  },
  textcolor: {
    color: 'black',
    fontSize: 16,
  },
  imgStyle: {
    width: 160,
    height: 90,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
