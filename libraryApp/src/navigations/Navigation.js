import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              // shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => {
              <View>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>;
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
