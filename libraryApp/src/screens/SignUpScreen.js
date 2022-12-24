import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="user" size={25} color="#6666" />
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;
