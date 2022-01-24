import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {StateProps} from '../screens/Home';

interface StateItemProps extends TouchableOpacityProps {
  item: StateProps;
}

export function StateItem({item, ...rest}: StateItemProps) {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.stateItem}>
        <View style={styles.initials}>
          <Text style={styles.initialText}>{item.sigla}</Text>
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
