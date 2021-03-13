import styled from 'styled-components';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 345px;
  height: 60px;
  background: #ff872c;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-family: 'Poppins_600SemiBold';
  font-weight: bold;
  font-size: 18px;
`;
