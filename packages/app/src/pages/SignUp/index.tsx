import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { getValidationErrors } from '../../utils';
import logoImg from '../../assets/logo.png';

import {
  Container,
  LogoContainer,
  Content,
  SignInButton,
  SignInText,
  Title,
} from './styles';

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(async (data: SignUpRequest) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().min(6, 'No mínimo 6 digitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);

      navigation.navigate('SignUpSuccess');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente.',
      );
    }
  }, [navigation]);

  return (
    <Container>
      <LogoContainer>
        <Image source={logoImg} />
      </LogoContainer>

      <Content>
        <Title>Faça seu cadastro</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            autoCorrect={false}
            name="name"
            icon="user"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInputRef.current?.focus();
            }}
          />

          <Input
            ref={emailInputRef}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />

          <Input
            ref={passwordInputRef}
            name="password"
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />

          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Cadastrar
          </Button>
        </Form>

        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          <SignInText>Voltar para login</SignInText>
        </SignInButton>
      </Content>
    </Container>
  );
};

export default SignUp;
