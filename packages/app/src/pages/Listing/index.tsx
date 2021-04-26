import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { StoreState } from '../../store/createStore';

import Header from '../../components/Header';
import Card from '../../components/Card';
import { formatCurrency } from '../../utils';

import {
  Container,
  CardsContainer,
  Content,
  ListTitle,
  ItemList,
  DetailsContainer,
  ItemValue,
  ItemType,
  ItemDate,
  ItemTitle,
  CardListContainer,
  ItensListContent,
} from './styles';

export interface CardProps {
  type: string;
  value: string;
  date?: string;
}

export interface Item {
  id: string;
  title: string;
  value: number;
  type: string;
  date: string;
}

const cardData: CardProps[] = [
  {
    type: 'Entrada',
    date: '13 de abril',
    value: '17.400,00',
  },
  {
    type: 'Saida',
    date: '03 de abril',
    value: '1.259,00',
  },
  {
    type: 'Total',
    value: '1.6141,00',
  },
];

const itensData: Item[] = [
  {
    id: '1',
    title: 'Refrigerante Fanta Laranja',
    value: 7.0,
    type: 'Vendas',
    date: '13/04/2000',
  },
  {
    id: '2',
    title: 'Bolacha Trakinas',
    value: 3.5,
    type: 'Vendas',
    date: '13/04/2000',
  },
  {
    id: '3',
    title: 'Contra filé',
    value: -12000.45,
    type: 'Compras',
    date: '13/04/2000',
  },
  {
    id: '4',
    title: 'Amaciantes',
    value: -5000.0,
    type: 'Compras',
    date: '13/04/2000',
  },
];

const Listing = () => {
  const { user } = useSelector(
    (state: StoreState) => state.auth,
  );

  const navigation = useNavigation();

  useEffect(() => {
    async function loadOnboardedUser() {
      const response = await api.post(`/onboards/${user?.id}`);

      if (response.data) {
        navigation.navigate('Onboarding');
      }
    }

    loadOnboardedUser();
  }, [user?.id, navigation]);

  return (
    <Container>
      <Header large />
      <CardListContainer>
        <CardsContainer
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cardData}
          keyExtractor={(card) => card.type}
          renderItem={({ item: card }) => <Card card={card} />}
        />
      </CardListContainer>

      <ListTitle>Listagem</ListTitle>
      <ItensListContent>
        <Content
          showsVerticalScrollIndicator={false}
          data={itensData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isValueNegative = item.value < 0;
            return (
              <ItemList>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemValue isNegative={isValueNegative}>
                  {formatCurrency(item.value)}
                </ItemValue>
                <DetailsContainer>
                  <ItemType>{item.type}</ItemType>
                  <ItemDate>{item.date}</ItemDate>
                </DetailsContainer>
              </ItemList>
            );
          }}
        />
      </ItensListContent>
    </Container>
  );
};

export default Listing;
