import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #5636d3;

  padding: 24px;
`;

export const LogoContainer = styled(View)`
  margin-top: 100px;
`;

export const Title = styled(Text)`
  font-size: 32px;
  width: 162px;
  color: #f4ede8;
  text-align: center;
  font-family: 'Poppins_600SemiBold';
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Content = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled(Text)`
  width: 200px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-family: 'Poppins_400Regular';
  margin-bottom: 120px;

  color: #d4c2ff;
`;
