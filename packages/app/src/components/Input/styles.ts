import styled, { css } from 'styled-components';
import { View, TextInput as InputElement } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled(View)<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 2px;
  border-color: #fff;

  ${(props) => props.isErrored
    && css`
      border-color: #c53030;
    `}
  ${(props) => props.isFocused
    && css`
      border-color: #ff872c;
    `}
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(InputElement)`
  flex: 1;
  color: #969cb2;
  font-size: 16px;
  font-family: 'Poppins_400Regular';

  /* font-family: 'RoboSlab-Regular'; */
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
