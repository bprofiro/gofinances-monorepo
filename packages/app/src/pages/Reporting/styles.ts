import styled, { css } from 'styled-components';
import { Image, Text, View, TouchableOpacity } from 'react-native';

interface TypeProps {
  type: 'income' | 'outcome' | '';
  selected: boolean;
}

export const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  background: #F0F2F5;
`;

export const Title = styled(Text)`
  font-size: 20px;
  line-height: 30px;
  font-family: 'Poppins_400Regular';
  margin-bottom: 10px;

  color: #000000;
`;

export const Content = styled(View)`
  flex: 1;
  padding: 24px 24px 0 24px;
`;

export const GraphWrapper = styled(View)`
  width: 340px;
  height: 180px;
  padding: 20px;
  margin-bottom: 24px;
  margin-top: 10px;

  background: #fff;
  border-radius: 10px;

  flex-direction: row;
  align-items: flex-end;
`;

export const BestSellersWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BestSeller = styled(View)`
  margin-top: 15px;
  width: 160px;
  height: 130px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  justify-content: space-between;
`;

export const BestSellerHeader = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const BestSellerText= styled(Text)`
  font-size: 16px;
  line-height: 21px;
  font-family: 'Poppins_400Regular';

  color: #000000;
`;
