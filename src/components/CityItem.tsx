import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {CityProps} from '../screens/Cities';
import {StateProps} from '../screens/Home';

interface CityItemProps extends TouchableOpacityProps {
  item: CityProps;
}

export function CityItem({item, ...rest}: CityItemProps) {
  return (
    <TouchableOpacity>
      <View style={styles.stateItem}>
        <View style={styles.initials}>
          <Text style={styles.initialText}>{item.nome.substring(0, 1)}</Text>
        </View>
        <Text style={styles.stateName}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  stateItem: {
    paddingVertical: 10,
    marginTop: 5,
    backgroundColor: '#666',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 5,
  },
  initials: {
    width: 50,
    height: 50,
    backgroundColor: '#eac364',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  initialText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  stateName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 10,
    alignSelf: 'center',
  },
});
