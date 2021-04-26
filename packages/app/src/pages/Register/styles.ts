import styled from 'styled-components';
import {
  Text, View,
} from 'react-native';

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
