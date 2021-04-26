import styled, { css } from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const GraphText = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  font-family: 'Poppins_400Regular';

  color: #000000;
`;

export const GraphContainer = styled(View)`
  height: 100%;
  width: 60px;

  margin-bottom: -20px;
`;
