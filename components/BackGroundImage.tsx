import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';
const { height, width } = Dimensions.get('window');

export default function App() {


  return (
    <View style={styles.container}>

      <Image source={require('./../photos/backgroundSky.jpg')} style={styles.backgroundSky} ></Image>
      <Image source={require('./../photos/backgroundGrass.jpg')} style={styles.backgroundGrass}></Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  backgroundGrass: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.2,
    zIndex: 1,
  },
  backgroundSky: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height * 0.8,
    zIndex: 1,
  }
});