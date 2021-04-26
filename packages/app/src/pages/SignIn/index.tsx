import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { authRequest } from '../../store/modules/auth/actions';

import { getValidationErrors } from '../../utils';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  LogoContainer,
  Title,
  Content,
  SignUpWrapper,
  SubTitle,
  SignUpButton,
  SignUpText,
} from './styles';

interface SignInRequest {
  email: string;
  password: string;
}

const SignIn: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { loadingSignInRequest } = useSelector(
    (state: StoreState) => state.auth,
  );

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(async (data: SignInRequest) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().min(6, 'No mínimo 6 digitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(authRequest({ email: data.email, password: data.password }));

      navigation.navigate('Transaction');
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
  }, [dispatch, navigation]);

  return (
    <Container>
      <LogoContainer>
        <Image source={logoImg} />
      </LogoContainer>

      <Content>
        <Title>Faça o seu login</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
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
            {loadingSignInRequest ? 'Carregando...' : 'Entrar'}
          </Button>
        </Form>

        <SignUpWrapper>
          <SubTitle>Ainda não é cadastrado?</SubTitle>
          <SignUpButton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <SignUpText>Criar minha conta</SignUpText>
          </SignUpButton>
        </SignUpWrapper>
      </Content>
    </Container>
  );
};

export default SignIn;
