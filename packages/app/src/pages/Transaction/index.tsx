import React, {
  useCallback, useRef, useState, useEffect,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { TextInput, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import income from '../../assets/income.png';
import outcome from '../../assets/outcome.png';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  Content,
  TypesWrapper,
  Type,
  TypeText,
  TypeImage,
} from './styles';
import { formatCurrency } from '../../utils';
import api from '../../services/api';

interface TransactionProps {
  id: string;
  name: string;
  price: number;
  type?: 'income' | 'outcome';
  quantity?: number;
}

interface ApiProduct {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

const Transaction = () => {
  const formRef = useRef<FormHandles>(null);
  const priceInputRef = useRef<TextInput>(null);
  const categoryInputRef = useRef<TextInput>(null);

  const [typeSelect, setTypeSelect] = useState<'income' | 'outcome' | ''>('');

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [productCode, setProductCode] = useState('');
  // const [items, setItems] = useState<TransactionProps[]>([]);
  const [initialData, setInitialData] = useState<TransactionProps>(
    {} as TransactionProps,
  );

  const handleBarCodeScanned = useCallback(({ data }) => {
    setScanned(true);
    setProductCode(data);
  }, []);

  useEffect(() => {
    async function requestPermission(): Promise<void> {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }

    requestPermission();
  }, []);

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get<ApiProduct>(`/products/${productCode}`);

      if (response.data) {
        setInitialData({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
        });
      }
    }

    loadProduct();
  }, [productCode]);

  // const addMoreProducts = useCallback(() => {
  // }, []);

  const handleSubmit = useCallback(
    (data) => {
      console.log({ data, typeSelect });
      setScanned(false);
    },
    [typeSelect],
  );

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      {!scanned ? (
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      ) : (
        <>
          <Header />

          <Content>
            <Title>Cadastro</Title>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="nome"
                placeholder="Nome"
                returnKeyType="next"
                defaultValue={initialData.name}
                onSubmitEditing={() => {
                  priceInputRef.current?.focus();
                }}
              />

              <Input
                ref={priceInputRef}
                name="price"
                keyboardType="decimal-pad"
                returnKeyType="next"
                defaultValue={formatCurrency(initialData.price)}
                placeholder="Price"
                onSubmitEditing={() => {
                  categoryInputRef.current?.focus();
                }}
              />

              <TypesWrapper>
                <Type
                  onPress={() => setTypeSelect('income')}
                  type={typeSelect}
                  selected={typeSelect === 'income'}
                >
                  <TypeImage source={income} />
                  <TypeText>Income</TypeText>
                </Type>
                <Type
                  onPress={() => setTypeSelect('outcome')}
                  type={typeSelect}
                  selected={typeSelect === 'outcome'}
                >
                  <TypeImage source={outcome} />
                  <TypeText>Outcome</TypeText>
                </Type>
              </TypesWrapper>

              <Input
                name="quantity"
                keyboardType="decimal-pad"
                defaultValue={String(initialData.quantity)}
                placeholder="Quantidade"
                returnKeyType="send"
              />
              <Button
                onPress={() => {
                  setScanned(false);
                }}
              >
                Mais Produtos
              </Button>
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Enviar
              </Button>
            </Form>
          </Content>
        </>
      )}
    </Container>
  );
};

export default Transaction;
