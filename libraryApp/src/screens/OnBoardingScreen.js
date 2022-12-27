import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Julien Green',
          subtitle: "Un livre est une fenêtre par laquelle on s'évade",
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Kerry Reichs',
          subtitle: "Lire c'est rêver les yeux ouverts",
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
