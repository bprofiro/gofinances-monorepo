import React, { useEffect } from 'react';

import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { StoreState } from '../../store/createStore';

const Onboard: React.FunctionComponent = () => {
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
    <Text>Dashboard</Text>
  );
};

export default Onboard;
