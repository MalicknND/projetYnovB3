import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();

  return (
    <View>
      <TextInputContainer>
        <TextInputStyled
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </TextInputContainer>
      <TextInputContainer>
        <TextInputStyled
          placeholder="Mot de passse"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </TextInputContainer>
      <LoginButton onPress={() => navigation.navigate('Book')}>
        <TextStyled>Login</TextStyled>
      </LoginButton>

      <LogoutButton onPress={() => navigation.navigate('Register')}>
        <TextRStyled>S'inscrire.</TextRStyled>
      </LogoutButton>
    </View>
  );
};

const TextInputContainer = styled.View`
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: #dacfcd;
  padding: 12px;
  border-radius: 12px;
  color: black;
`;
const LoginButton = styled.TouchableOpacity`
  background-color: #edb83e;
  padding: 12px;
  margin: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  padding-bottom: 100px;
`;
const TextStyled = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;
const TextRStyled = styled.Text`
  color: white;
`;

export default LoginForm;
