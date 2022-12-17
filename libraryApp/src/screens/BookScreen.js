import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Book from '../components/Book';
import styled from 'styled-components';

const BookScreen = () => {
  const [book, setBook] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        'https://openlibrary.org/search.json?q=harry%20potter&fields=title,last_modified_i,isbn&limit=20',
      )
      .then(res => {
        console.log(res);
        setBook(res.data.docs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <ViewStyled>
        {book.map((item, index) => {
          return <Book item={item} />;
        })}
      </ViewStyled>
    </ScrollView>
  );
};

const ViewStyled = styled.View`
  margin: 0px 20px;
`;

export default BookScreen;
