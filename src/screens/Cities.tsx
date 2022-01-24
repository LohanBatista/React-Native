import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CityItem} from '../components/CityItem';
import {api} from '../services/api';
import {StateProps} from './Home';

interface CityParams {
  state: StateProps;
}

export interface CityProps {
  id: number;
  nome: string;
}

export function Cities() {
  const routeParams = useRoute();
  const {state} = routeParams.params as CityParams;
  const [cities, setCities] = useState<CityProps[]>([]);
  const navigation = useNavigation();

  async function loadCities() {
    const response = await api.get<CityProps[]>(
      `/${state.id}/municipios?orderBy=nome`,
    );
    setCities(response.data);
  }

  useEffect(() => {
    loadCities();
    navigation.setOptions({title: state.nome.toUpperCase()});
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<CityProps>
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={cities}
        keyExtractor={(city) => String(city.id)}
        renderItem={({item}) => {
          return <CityItem item={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
  },
});
