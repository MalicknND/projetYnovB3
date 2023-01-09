import {View, Button, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../navigations/AuthProvider';

const Logout = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.title}>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    margin: 45,
  },
});
