import React, {useState, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import auth from '@react-native-firebase/auth';
import {AuthContext} from '../navigations/AuthProvider';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  // const Register = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(
  //       'jane.doe@example.co',
  //       'SuperSecretPassword!',
  //     )
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Créer un compte</Text>

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
        onPress={() => register(email, password)}
      />
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

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
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>
          Vous avez un compte?Connectez-vous.
        </Text>
      </TouchableOpacity>
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
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

export default SignUpScreen;
