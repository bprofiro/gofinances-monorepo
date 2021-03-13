import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

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
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Poppins_600SemiBold';
  /* font-family: 'RobotoSlab-Medium'; */
  margin-bottom: 32px;
`;

export const Content = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SignUpWrapper = styled(View)`
  margin-top: 47px;
  align-items: center;
`;

export const SubTitle = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  font-family: 'Poppins_600SemiBold';

  color: #C4C4C4;
`;

export const SignUpButton = styled(TouchableOpacity)`
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignUpText = styled(Text)`
  margin-left: 8px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins_600SemiBold';

  color: #FF872C;
;
`;
