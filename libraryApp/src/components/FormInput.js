import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styled from 'styled-components';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <ViewStyled>
      <IconStyled>
        <AntDesign name={iconType} size={25} color="#666" />
      </IconStyled>
      <TextInputStyled
        value={labelValue}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#6666"
        {...rest}
      />
    </ViewStyled>
  );
};

export default FormInput;

const ViewStyled = styled.View`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
  height: 45px;
  border-color: #ccc;
  border-radius: 3px;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
`;
const IconStyled = styled.View`
  padding: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right-color: #ccc;
  border-right-width: 1px;
  width: 50px;
`;
const TextInputStyled = styled.TextInput`
  padding: 10px;
  flex: 1;
  font-size: 16px;
  font-family: Lato-Regular;
  color: #333;
  justify-content: center;
  align-items: center;
`;
