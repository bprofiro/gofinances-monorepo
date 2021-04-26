import styled, { css } from 'styled-components';
import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';

interface TypeProps {
  type: 'income' | 'outcome' | '';
  selected: boolean;
}

export const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  background: #F0F2F5;
`;

export const Title = styled(Text)`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 24px;
  font-family: 'Poppins_400Regular';

  color: #000000;
`;

export const Content = styled(View)`
  flex: 1;

  padding: 24px;
`;

export const TypesWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 16px 0;

`;

export const Type = styled(TouchableOpacity)<TypeProps>`
  flex-direction: row;
  align-items: center;
  width: 159px;
  height: 50px;
  justify-content: center;

  padding: 13px 28px;

  border: 1px solid #969CB2;
  border-radius: 5px;

  ${({ type, selected }) => type === 'income' && selected && css`
    border: 3px solid #12A454;
  `}

  ${({ type, selected }) => type === 'outcome' && selected && css`
    border: 3px solid #E83F5B;
  `}

`;

export const TypeImage = styled(Image)`
  width: 24px;
  height: 24px;

  margin-right: 16px;
`;

export const TypeText = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  font-family: 'Poppins_400Regular';

  color: #363F5F;
`;
