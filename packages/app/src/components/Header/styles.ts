import styled from 'styled-components';
import { View, Text } from 'react-native';

interface ContainerProps {
  large?: boolean;
}

export const Container = styled(View)<ContainerProps>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background: #5636d3;
  max-height: ${({ large }) => (large ? '267px' : '105px')};

  padding: 48px 25px 0 25px;
`;

export const Date = styled(Text)`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #fff;
`;
