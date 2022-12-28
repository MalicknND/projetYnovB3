import React from 'react';
import styled from 'styled-components';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableStyled style={[{backgroundColor: bgColor}]} {...rest}>
      <ViewStyled>
        <FontAwesome name={btnType} size={22} color={color} />
      </ViewStyled>
      <TextWStyled>
        <TextStyled style={[{color: color}]}>{buttonTitle}</TextStyled>
      </TextWStyled>
    </TouchableStyled>
  );
};

export default SocialButton;

const TouchableStyled = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  padding: 10px;
  flex-direction: row;
  border-radius: 10px;
`;
const ViewStyled = styled.View`
  width: 30px;
  justify-content: center;
  align-items: center;
`;
const TextWStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TextStyled = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: Lato-Regular;
`;
