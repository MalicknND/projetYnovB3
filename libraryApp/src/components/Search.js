import * as React from 'react';
import {StyleSheet} from 'react-native';
//pour la barre de recherche
import {Searchbar} from 'react-native-paper';
import styled from 'styled-components';

const Search = () => {
  const [search, setSearch] = React.useState('');

  return (
    <ViewStyled>
      <Searchbar
        style={styles.searchBar}
        placeholder="Rechercher"
        onChangeText={text => setSearch(text)}
        value={search}
      />
    </ViewStyled>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 15,
  },
});

const ViewStyled = styled.View`
  height: 5%;
  background-color: #5f5b5b;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default Search;
