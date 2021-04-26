import styled, { css } from 'styled-components';
import { View, Text } from 'react-native';

interface ContainerProps {
  type: string;
}

export const Container = styled(View)<ContainerProps>`
  background: #fff;
  height: 200px;
  width: 300px;
  border-radius: 10px;
  padding: 20px;

  ${({ type }) => type === 'Total'
    && css`
      background: #ff872c;
    `}

  margin-left: 25px;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardType = styled(Text)<ContainerProps>`
  font-size: 16px;
  color: #363f5f;
  font-family: 'Poppins_400Regular';

  ${({ type }) => type === 'Total'
    && css`
      color: #fff;
    `}
`;

export const CardValue = styled(Text)<ContainerProps>`
  margin-top: 24px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Poppins_400Regular';
  color: #363f5f;

  ${({ type }) => type === 'Total'
    && css`
      color: #fff;
    `}
`;

export const CardText = styled(Text)<ContainerProps>`
  font-size: 12px;
  margin-top: 8px;
  font-family: 'Poppins_400Regular';
  line-height: 18px;
  color: #969cb3;

  ${({ type }) => type === 'Total'
    && css`
      color: #fff;
    `}
`;
