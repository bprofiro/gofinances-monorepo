import React, { useState } from 'react';

import {
  ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import {
  Container,
  Title,
  Content,
  GraphWrapper,
  BestSellersWrapper,
  BestSeller,
  BestSellerHeader,
  BestSellerText,
} from './styles';
import Header from '../../components/Header';
import Graph from './Graph';

interface GraphDimensionsProps {
  width: number;
  height: number;
}

const Reporting = () => {
  const [graphDimentions, setGraphDimensions] = useState<GraphDimensionsProps>({} as GraphDimensionsProps);

  return (
    <Container>
      <Header />

      <Content>
        <Title>Abril</Title>
        <GraphWrapper onLayout={({ nativeEvent: { layout: { width, height } } }) => setGraphDimensions({ width, height })}>
          <Graph graphDimensions={graphDimentions} />
        </GraphWrapper>

        <Title>Esse mês você:</Title>
        <Title style={{ color: '#E83F5B' }}>Teve um prejuízo de R$ 1.259,00</Title>

        <Title style={{ marginTop: 14 }}>Os mais vendidos:</Title>

        <ScrollView showsVerticalScrollIndicator={false}>
          <BestSellersWrapper>
            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>

            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>

            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>

            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>

            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>

            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>

            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>

            <BestSeller>
              <BestSellerHeader>
                <Entypo name="drink" size={24} color="#969CB2" />
                <BestSellerText style={{ marginLeft: 10 }}>Bebidas:</BestSellerText>
              </BestSellerHeader>
              <BestSellerText>Refrigerante</BestSellerText>
              <BestSellerText style={{ color: '#12A454' }}>R$ 3.000,00</BestSellerText>
            </BestSeller>
          </BestSellersWrapper>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Reporting;
