import React from 'react';
import styled from 'styled-components';

const Book = props => {
  return (
    <ViewStyled>
      <ImageStyled
        source={{
          uri: getFileUri(props.item),
        }}
      />
      <TitleStyled>
        <TextStyled>Titre : {props.item.volumeInfo.title}</TextStyled>
        <TextStyled>Description : {props.item.volumeInfo.subtitle}</TextStyled>
      </TitleStyled>
    </ViewStyled>
  );
};

const getFileUri = item => {
  if (item.volumeInfo.imageLinks) {
    return item.volumeInfo.imageLinks.smallThumbnail;
  }
};

const ViewStyled = styled.View`
  background-color: #f1e8e8;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;

  flex-direction: row;
  flex-wrap: wrap;
`;
const TitleStyled = styled.View`
  flex: 1;
  padding: 10px;
`;
const TextStyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const ImageStyled = styled.Image`
  width: 200px;
  height: 200px;
`;

export default Book;
