import React, {useContext, useState} from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigations/AuthProvider';
import styled from 'styled-components';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);
  return (
    <ViewStyled>
      <ImageStyled source={require('../assets/logo.png')} />
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholder="Email"
        iconType="user"
        keyBoardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholder="Mot de passe"
        iconType="lock"
        secureTextEntry={true}
        autoCorrect={false}
      />
      <FormButton
        buttonTitle="Se connecter"
        onPress={() => login(email, password)}
      />
      <TouchableStyled onPress={() => {}}>
        <TextStyled>Mot de passe oublié?</TextStyled>
      </TouchableStyled>
      <SocialButton
        buttonTitle="Se connecter avec facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />
      <SocialButton
        buttonTitle="Se connecter avec google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />
      <TouchableStyled onPress={() => navigation.navigate('Signup')}>
        <TextStyled>Pas de compte ? Inscrivez-vous.</TextStyled>
      </TouchableStyled>
    </ViewStyled>
  );
};

const ViewStyled = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 50px;
`;

const TouchableStyled = styled.TouchableOpacity`
  margin: 35px;
  text-align: center;
`;
const TextStyled = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #2e64e5;
  font-family: Lato-Regular;
`;
const ImageStyled = styled.Image`
  width: 150px;
  height: 150px;
`;

export default LoginScreen;
