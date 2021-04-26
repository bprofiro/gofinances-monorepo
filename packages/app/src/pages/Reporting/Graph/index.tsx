import React from 'react';
import { BarChart } from 'react-native-svg-charts';

import { Container, GraphText, GraphContainer } from './styles';

const graphData = [
  {
    value: 8,
    svg: {
      fill: '#4124B3',
    },
  },
  {
    value: 10,
    svg: {
      fill: '#FF872C',
    },
  },
];

const Graph = () => (
  <Container>
    <GraphContainer>
      <BarChart
        data={graphData}
        yMin={0}
        svg={{
          fill: 'rgb(134, 65, 244)',
        }}
        yAccessor={({ item }) => item.value}
        spacingInner={0.6}
        style={{
          marginBottom: 10,
          borderRadius: 8,
          width: 45,
          height: 100,
        }}
      />
      <GraphText>Fevereiro</GraphText>
    </GraphContainer>

    <GraphContainer>
      <BarChart
        data={graphData}
        yMin={0}
        svg={{
          fill: 'rgb(134, 65, 244)',
        }}
        yAccessor={({ item }) => item.value}
        spacingInner={0.6}
        style={{
          marginBottom: 10,
          borderRadius: 8,
          width: 45,
          height: 100,
        }}
      />
      <GraphText>Abril</GraphText>
    </GraphContainer>

    <GraphContainer>
      <BarChart
        data={graphData}
        yMin={0}
        svg={{
          fill: 'rgb(134, 65, 244)',
        }}
        yAccessor={({ item }) => item.value}
        spacingInner={0.6}
        style={{
          marginBottom: 10,
          borderRadius: 8,
          width: 45,
          height: 100,
        }}
      />
      <GraphText>Março</GraphText>
    </GraphContainer>
  </Container>
);

export default Graph;
