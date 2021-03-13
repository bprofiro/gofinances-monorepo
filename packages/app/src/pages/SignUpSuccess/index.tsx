import React from 'react';

import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import doneImg from '../../assets/done.png';

import { Container, LogoContainer, Content, Title, SubTitle } from './styles';

const SignUpSuccess: React.FunctionComponent = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <Image source={logoImg} />
      </LogoContainer>

      <Content>
        <Image source={doneImg} />
        <Title>Cadastro concluído</Title>
        <SubTitle>Agora você faz parte da plataforma do Gofinances</SubTitle>
        <Button
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          Fazer login
        </Button>
      </Content>
    </Container>
  );
};

export default SignUpSuccess;
