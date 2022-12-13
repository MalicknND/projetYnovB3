import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import logo from '../assets/logo.png';
const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  logo: {
    width: '50%',
    height: '50%',
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Logo;
