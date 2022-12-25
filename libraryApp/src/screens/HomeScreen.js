import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FormButton from '../components/FormButton';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Bienvenue</Text>
      <FormButton buttonTitle="Logout" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default HomeScreen;
