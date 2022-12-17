import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const Book = props => {
  return (
    <ViewStyled>
      <View>
        <ImageStyled
          source={{
            uri: getFileUri(props.item),
          }}
        />
      </View>
      <TitleStyled>
        <TextStyled numberOfLines={1} ellipsizeMode="tail">
          {props.item.title}
        </TextStyled>
      </TitleStyled>
    </ViewStyled>
  );
};

const getFileUri = item => {
  return 'https://covers.openlibrary.org/b/isbn/' + item.isbn[1] + '-S.jpg';
};

const ViewStyled = styled.View`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid #eee;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const TitleStyled = styled.View`
  overflow: hidden;
  flex: 1;
  padding: 10px;
`;
const TextStyled = styled.Text`
  font-size: 16px;
`;
const ImageStyled = styled.Image`
  width: 100px;
  height: 100px;
`;

export default Book;
