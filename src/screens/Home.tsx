import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StateItem} from '../components/StateItem';
import {api} from '../services/api';

export interface StateProps {
  id: number;
  nome: string;
  sigla: string;
  regiao: string;
}

export function Home() {
  const [states, setStates] = useState<StateProps[]>([]);
  const navigation = useNavigation();

  async function loadStates() {
    const response = await api.get('?orderBy=nome');
    setStates(response.data);
  }

  useEffect(() => {
    loadStates();
  }, []);

  function handleToCity(state: StateProps) {
    navigation.navigate('Cities', {state: state});
  }

  return (
    <View style={styles.container}>
      <FlatList<StateProps>
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={states}
        keyExtractor={(estado) => String(estado.id)}
        renderItem={({item}) => {
          return <StateItem item={item} onPress={() => handleToCity(item)} />;
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
