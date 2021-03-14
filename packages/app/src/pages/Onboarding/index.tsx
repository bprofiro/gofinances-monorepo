import React, { useCallback, useState } from 'react';

import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { StoreState } from '../../store/createStore';
import logoImg from '../../assets/logo.png';

import {
  Container,
  LogoContainer,
  TextContainer,
  FirstStep,
  SecondStep,
  Title,
  TextContent,
  Actions,
  StepsContainer,
  StepOne,
  StepTwo,
  NextButton,
} from './styles';

const Onboard: React.FunctionComponent = () => {
  const [firstStep, setFirstStep] = useState(true);
  const [secondStep, setSecondStep] = useState(false);
  const { user } = useSelector(
    (state: StoreState) => state.auth,
  );

  const navigation = useNavigation();

  const nextStep = useCallback(async () => {
    if (firstStep) {
      setFirstStep(false);
      setSecondStep(true);
    } else {
      api.post(`/onboards/${user?.id}`);
      navigation.navigate('Listing');
    }
  }, [firstStep, user?.id, navigation]);

  return (
    <Container>
      <LogoContainer>
        <Image source={logoImg} />
      </LogoContainer>

      <TextContainer>
        <FirstStep isVisible={firstStep}>
          <Title>01.</Title>
          <TextContent>
            O Gofinances é o aplicativo de gestão de finanças da sua empresa.
          </TextContent>
        </FirstStep>

        <SecondStep isVisible={secondStep}>
          <Title>02.</Title>
          <TextContent>
            Tenha seu relatório de vendas e de estoque na palma da sua mão.
          </TextContent>
        </SecondStep>

        <Actions>
          <StepsContainer>
            <StepOne isVisible={firstStep} />
            <StepTwo isVisible={secondStep} />
          </StepsContainer>
          <NextButton onPress={nextStep}>
            <Icon name="arrow-right" size={30} color="#363F5F" />
          </NextButton>
        </Actions>
      </TextContainer>
    </Container>
  );
};

export default Onboard;
