import React, {
  useCallback, useRef, useState, useEffect,
} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { TextInput, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  Content,
} from './styles';
import { formatCurrency } from '../../utils';
import api from '../../services/api';

interface ProductProps {
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

const Register = () => {
  const formRef = useRef<FormHandles>(null);
  const priceInputRef = useRef<TextInput>(null);
  const categoryInputRef = useRef<TextInput>(null);

  const userId = useSelector((state) => state.auth.user.id);

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [productCode, setProductCode] = useState('');
  const [initialData, setInitialData] = useState<ProductProps>(
    {} as ProductProps,
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

  const handleSubmit = useCallback(
    async (data) => {
      console.log({ data });
      await api.post('/products/users', {
        name: data.name,
        price: Number(data.price),
        quantity: Number(data.quantity),
        code: productCode,
        id: userId,
      });

      setScanned(false);
    },
    [productCode, userId],
  );

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  console.log('oi');

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
                name="name"
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
                defaultValue={formatCurrency(initialData.price) || ''}
                placeholder="Price"
                onSubmitEditing={() => {
                  categoryInputRef.current?.focus();
                }}
              />

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

export default Register;
