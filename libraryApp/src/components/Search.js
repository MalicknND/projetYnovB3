import * as React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
//pour la barre de recherche
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components';

const Search = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  const [masterDataSource, setMasterDataSource] = React.useState([]);

  React.useEffect(() => {
    if (search === '') return;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:keyes&key=AIzaSyC3yjNeH7Q-KpzM-sUsJ-z8puqzhmNnDBg`,
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        setFilteredDataSource(responseJson.items);
        setMasterDataSource(responseJson.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, [search]);

  const searchFilterFunction = text => {
    setSearch(text);
  };

  return (
    <View>
      <Searchbar
        style={styles.searchBar}
        placeholder="Rechercher"
        onChangeText={text => searchFilterFunction(text)}
        value={search}
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            //aller a la page détails et afficher les details
            onPress={() => navigation.navigate('Book', {book: item})}>
            <ViewStyled>
              <ImageStyled
                source={{
                  uri: item.volumeInfo.imageLinks.smallThumbnail,
                }}
              />
              <TitleStyled>
                <TextStyled>Titre : {item.volumeInfo.title}</TextStyled>
                <TextStyled>
                  Description : {item.volumeInfo.subtitle}
                </TextStyled>
              </TitleStyled>
            </ViewStyled>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 15,
  },
});

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

export default Search;
