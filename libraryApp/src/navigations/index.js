import React from 'react';
import {AuthProvider} from './AuthProvider';
import AuthStack from './AuthStack';

const Providers = () => {
  return (
    <AuthProvider>
      <AuthStack />
    </AuthProvider>
  );
};

export default Providers;
