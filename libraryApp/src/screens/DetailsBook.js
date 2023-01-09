import {Button, Linking, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const DetailsBook = ({route, navigation}) => {
  const {book} = route.params;
  return (
    <ScrollStyled>
      <ViewStyled>
        <ImageStyled
          source={{uri: book.volumeInfo.imageLinks.smallThumbnail}}
        />
        <TitleStyled>
          <Text>
            <TextStyled>Titre</TextStyled> : {book.volumeInfo.title}
          </Text>
          <Text>
            <TextStyled>Description</TextStyled> : {book.volumeInfo.description}
          </Text>
          <Text>
            <TextStyled>Auteurs</TextStyled> : {book.volumeInfo.authors}
          </Text>
          <Text>
            <TextStyled>Nombre de pages</TextStyled> :{' '}
            {book.volumeInfo.pageCount}
          </Text>
        </TitleStyled>
      </ViewStyled>
      <ButtonStyled>
        <Button
          title="Acheter"
          onPress={() => Linking.openURL(book.saleInfo.buyLink)}
          color="black"
        />
      </ButtonStyled>
      <ButtonStyled>
        <Button
          title="Lecture"
          onPress={() => Linking.openURL(book.accessInfo.webReaderLink)}
          color="black"
        />
      </ButtonStyled>
    </ScrollStyled>
  );
};

const ScrollStyled = styled.ScrollView`
  margin-bottom: 30px;
`;
const ViewStyled = styled.View`
  background-color: #f1e8e8;
  margin: 15px;
  flex-direction: row;
  flex-wrap: wrap;
`;
const TitleStyled = styled.View`
  padding: 10px;
`;
const TextStyled = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
const ImageStyled = styled.Image`
  width: 250px;
  height: 300px;
  align-items: center;
  margin-left: 65px;
`;

const ButtonStyled = styled.View`
  padding-bottom: 20px;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

export default DetailsBook;
