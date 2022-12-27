import React from 'react';
import styled from 'styled-components';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableStyled {...rest}>
      <TitleStyled>{buttonTitle}</TitleStyled>
    </TouchableStyled>
  );
};

export default FormButton;

const TouchableStyled = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  background-color: #2e64e5;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const TitleStyled = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  font-family: Lato-Regular;
`;
