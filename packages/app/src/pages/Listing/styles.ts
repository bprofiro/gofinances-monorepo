import styled, { css } from 'styled-components';
import { View, Text, FlatList } from 'react-native';
import { CardProps, Item } from './index';

interface ItemValueProps {
  isNegative: boolean;
}

export const Container = styled(View)`
  flex: 1;
  background: #f0f2f5;
`;

export const CardListContainer = styled(View)`
  height: 200px;
`;

export const CardsContainer = styled(FlatList as new () => FlatList<CardProps>)`
  margin-top: -70px;
`;

export const ItensListContent = styled(View)`
  height: 450px;
`;

export const Content = styled(FlatList as new () => FlatList<Item>)`
  padding: 0 25px;
`;

export const ListTitle = styled(Text)`
  font-size: 20px;
  line-height: 30px;
  margin-left: 25px;
  margin-top: -60px;
  font-family: 'Poppins_400Regular';

  color: #000000;
`;

export const ItemList = styled(View)`
  width: 327px;
  height: 128px;
  border-radius: 10px;
  background: #fff;
  padding: 17px 24px;
  margin-top: 16px;
`;

export const ItemTitle = styled(Text)`
  font-size: 16px;
  font-family: 'Poppins_400Regular';
  line-height: 21px;
  margin-bottom: 2px;

  color: #363f5f;
`;

export const ItemValue = styled(Text)<ItemValueProps>`
  font-size: 20px;
  line-height: 30px;
  font-family: 'Poppins_600SemiBold';

  color: #12a454;

  ${({ isNegative }) => isNegative
    && css`
      color: #e83f5b;
    `}
`;

export const ItemType = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  font-family: 'Poppins_400Regular';

  color: #969cb3;
`;

export const ItemDate = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  font-family: 'Poppins_400Regular';

  color: #969cb3;
`;

export const DetailsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 19px;
  justify-content: space-between;
`;
