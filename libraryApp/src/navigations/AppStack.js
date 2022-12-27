import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsBook from '../screens/DetailsBook';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name="Book" component={DetailsBook} />
    </Stack.Navigator>
  );
};

export default AppStack;
