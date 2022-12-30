// import axios from 'axios';
// import React, {useEffect} from 'react';
// import {
//   ActivityIndicator,
//   FlatList,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import styled from 'styled-components';

// const Book = ({navigation}) => {
//   const [book, setbook] = React.useState([]);
//   const [isLoading, setLoading] = React.useState(true);

//   useEffect(() => {
//     axios
//       .get(
//         'https://www.googleapis.com/books/v1/volumes?q=food&key=AIzaSyC3yjNeH7Q-KpzM-sUsJ-z8puqzhmNnDBg',
//       )
//       .then(({data}) => setbook({items: data.items}))
//       .catch(error => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <View>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <FlatList
//           data={book.items}
//           keyExtractor={item => item.id}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               //aller a lz page détails et afficher les details
//               onPress={() => navigation.navigate('Book', {book: item})}>
//               <ViewStyled>
//                 <ImageStyled
//                   source={{
//                     uri: item.volumeInfo.imageLinks.smallThumbnail,
//                   }}
//                 />
//                 <TitleStyled>
//                   <TextStyled>Titre : {item.volumeInfo.title}</TextStyled>
//                   <TextStyled>
//                     Description : {item.volumeInfo.subtitle}
//                   </TextStyled>
//                 </TitleStyled>
//               </ViewStyled>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// // const ViewFStyled = styled.View`
// //   margin: 0px 20px;
// //   padding-top: 20px;
// // `;
// const ViewStyled = styled.View`
//   background-color: #f1e8e8;
//   border: 1px solid #eee;
//   border-radius: 5px;
//   margin-bottom: 10px;

//   flex-direction: row;
//   flex-wrap: wrap;
// `;
// const TitleStyled = styled.View`
//   flex: 1;
//   padding: 10px;
// `;
// const TextStyled = styled.Text`
//   font-size: 16px;
//   font-weight: bold;
// `;
// const ImageStyled = styled.Image`
//   width: 200px;
//   height: 200px;
// `;

// export default Book;
