import {TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import {ScrollView} from 'react-native';
import axios from 'axios';
import Book from '../components/Book';
import styled from 'styled-components';
import Search from '../components/Search';
import BottomNav from '../components/BottomNav';

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
      <Search />
      <BottomNav />
      <ViewStyled>
        {book.map((item, index) => {
          return (
            <TouchableOpacity
              //aller a lz page détails et afficher les details
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
  padding-top: 20px;
`;
export default HomeScreen;
