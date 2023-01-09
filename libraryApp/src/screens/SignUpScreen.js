import React, {useState, useContext} from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import {AuthContext} from '../navigations/AuthProvider';
import styled from 'styled-components';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <ViewStyled>
      <CreateStyled>Créer un compte</CreateStyled>

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
      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholder="Confirmer Mot de passe"
        iconType="lock"
        secureTextEntry={true}
        autoCorrect={false}
      />

      <FormButton
        buttonTitle="S'inscrire"
        onPress={() => {
          register(email, password);
        }}
      />
      <PrivateStyled>
        <TextPrivateStyled>
          By registering, you confirm that you accept our{' '}
        </TextPrivateStyled>
        <TouchableStyled>
          <TextCoPrivateStyled>Terms of service</TextCoPrivateStyled>
        </TouchableStyled>
        <TextPrivateStyled> and </TextPrivateStyled>
        <TextCoPrivateStyled>Privacy Policy</TextCoPrivateStyled>
      </PrivateStyled>

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
      <TouchableStyled onPress={() => navigation.navigate('Login')}>
        <TextStyled>Vous avez un compte ? Connectez-vous.</TextStyled>
      </TouchableStyled>
    </ViewStyled>
  );
};

const ViewStyled = styled.View`
  background-color: #f9fafd;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const PrivateStyled = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 35px;
  justify-content: center;
`;

const TouchableStyled = styled.TouchableOpacity`
  /* margin: 35px;
  text-align: center; */
`;
const CreateStyled = styled.Text`
  font-family: 'Kufam-SemiBoldItalic';
  font-size: 28px;
  margin-bottom: 10px;
  color: #051d5f;
`;
const TextPrivateStyled = styled.Text`
  font-size: 13px;
  font-weight: 400;
  font-family: Lato-Regular;
  color: grey;
`;
const TextCoPrivateStyled = styled.Text`
  font-size: 13px;
  font-weight: 400;
  font-family: Lato-Regular;
  color: #e88832;
`;
const TextStyled = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #2e64e5;
  font-family: Lato-Regular;
`;

export default SignUpScreen;
