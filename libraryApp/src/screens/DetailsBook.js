import {View, Text} from 'react-native';
import React from 'react';

//
const DetailsBook = ({route, navigation}) => {
  const {book} = route.params;
  return (
    <View>
      <Text>{book.volumeInfo.title}</Text>
    </View>
  );
};

export default DetailsBook;
