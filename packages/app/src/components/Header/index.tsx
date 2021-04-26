import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container, Date } from './styles';

interface HeaderProps {
  large?: boolean;
}

const Header = ({ large }: HeaderProps) => (
  <Container large={large}>
    <Image source={logoImg} />

    <Date>16 de abril</Date>
  </Container>
);

export default Header;
