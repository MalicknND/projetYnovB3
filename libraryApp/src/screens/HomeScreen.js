import {TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import {ScrollView} from 'react-native';
import axios from 'axios';
import Book from '../components/Book';
import styled from 'styled-components';

const HomeScreen = ({navigation}) => {
  const [book, setBook] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=food&key=AIzaSyC3yjNeH7Q-KpzM-sUsJ-z8puqzhmNnDBg',
      )
      .then(res => {
        console.log(res);
        setBook(res.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <ScrollView>
      <ViewStyled>
        {book.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Book', {book: item})}>
              <Book item={item} />
            </TouchableOpacity>
          );
        })}
      </ViewStyled>
    </ScrollView>
  );
};

const ViewStyled = styled.View`
  margin: 0px 20px;
`;
export default HomeScreen;
