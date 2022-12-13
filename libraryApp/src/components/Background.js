import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';

const Background = props => {
  return (
    <View>
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://i.stack.imgur.com/uD9js.png',
        }}>
        {props.children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
});

export default Background;
