import React from 'react';
import {Text, View} from 'react-native';
import Background from '../components/Background';
import LoginForm from '../components/LoginForm';
import Logo from '../components/logo';

const LoginScreen = () => {
  return (
    <View>
      <Background>
        <Logo />
        <LoginForm />
      </Background>
    </View>
  );
};

export default LoginScreen;
