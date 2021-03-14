import styled, { css } from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

interface StepProps {
  isVisible: boolean;
}

export const Container = styled(View)`
  flex: 1;
  background: #F0F2F5;
`;

export const LogoContainer = styled(View)`
  width: 100%;
  height: 250px;
  background: #5636D3;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled(View)`
  height: 100%;
  padding: 100px 40px;
`;

export const FirstStep = styled(View)<StepProps>`
  ${({ isVisible }) => !isVisible && css`
    display: none;
  `}
`;

export const SecondStep = styled(View)<StepProps>`
  ${({ isVisible }) => !isVisible && css`
    display: none;
  `}
`;

export const Title = styled(Text)`
  color: #969CB3;
  font-family: 'Poppins_600SemiBold';
  font-size: 40px;
  line-height: 44px;
`;

export const TextContent = styled(Text)`
  font-size: 24px;
  line-height: 34px;
  margin-top: 40px;
  font-family: 'Poppins_400Regular';

  color: #363F5F;
`;

export const Actions = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 80px;
`;

export const StepsContainer = styled(View)`
  width: 16px;
  height: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StepOne = styled(View)<StepProps>`
  width: 4px;
  height: 4px;
  border: 1px solid #363F5F;

  ${({ isVisible }) => isVisible && css`
    background: #363F5F;
  `}

  border-radius: 2px;
`;

export const StepTwo = styled(View)<StepProps>`
  width: 4px;
  height: 4px;
  border: 1px solid #363F5F;
  ${({ isVisible }) => isVisible && css`
    background: #363F5F;
  `}

  border-radius: 2px;
`;

export const NextButton = styled(TouchableOpacity)``;
