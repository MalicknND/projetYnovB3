import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components';

//
const DetailsBook = ({route, navigation}) => {
  const {book} = route.params;
  return (
    <ViewStyled>
      <ImageStyled source={{uri: book.volumeInfo.imageLinks.smallThumbnail}} />
      <TitleStyled>
        <Text>{book.volumeInfo.title}</Text>
        <Text>{book.volumeInfo.subtitle}</Text>
        <Text>{book.volumeInfo.authors}</Text>
      </TitleStyled>
    </ViewStyled>
  );
};

const ViewStyled = styled.View`
  background-color: #f1e8e8;

  flex-direction: row;
  flex-wrap: wrap;
`;
const TitleStyled = styled.View`
  /* overflow: hidden; */

  padding: 10px;
`;
// const TextStyled = styled.Text`
//   font-size: 16px;
//   font-weight: bold;
// `;
const ImageStyled = styled.Image`
  width: 250px;
  height: 300px;
  align-items: center;
  margin-left: 65px;
`;

export default DetailsBook;
