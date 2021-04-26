import React, { useMemo } from 'react';
import { Image } from 'react-native';

import income from '../../assets/income.png';
import outcome from '../../assets/outcome.png';
import total from '../../assets/total.png';

import {
  Container, Header, CardType, CardValue, CardText,
} from './styles';

interface CardItem {
  type: string;
  value: string;
  date?: string;
}

interface CardProps {
  card: CardItem;
}

const Card = ({ card }: CardProps) => {
  const info = useMemo(() => {
    if (card.type === 'Entrada') {
      return {
        image: <Image source={income} />,
        text: `Última entrada dia ${card.date}`,
      };
    }

    if (card.type === 'Saida') {
      return {
        image: <Image source={outcome} />,
        text: `Última saída dia ${card.date}`,
      };
    }

    return {
      image: <Image source={total} />,
      text: `Referente ao período ${card.date}`,
    };
  }, [card.date, card.type]);

  return (
    <Container type={card.type}>
      <Header>
        <CardType type={card.type}>{card.type}</CardType>
        {info?.image}
      </Header>

      <CardValue type={card.type}>{`R$ ${card.value}`}</CardValue>
      <CardText type={card.type}>{info?.text}</CardText>
    </Container>
  );
};

export default Card;
