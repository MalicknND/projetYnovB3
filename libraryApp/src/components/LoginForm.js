import {View} from 'react-native';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <View>
      <TextInputContainer>
        <TextInputStyled placeholder="Email" />
      </TextInputContainer>
      <TextInputContainer>
        <TextInputStyled placeholder="Mot de passse" secureTextEntry={true} />
      </TextInputContainer>
      <LoginButton>
        <TextStyled>Login</TextStyled>
      </LoginButton>
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
const TextStyled = styled.Text`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;

export default LoginForm;
