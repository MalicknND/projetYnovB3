import {View, Button, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../navigations/AuthProvider';

const Logout = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.title}>
      <Button
        title="Logout"
        onPress={() => {
          logout() && navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});
