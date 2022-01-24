import {StatusBar} from 'expo-status-bar';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface DefaultButtonProps {
  isLoading?: boolean;
  title: string;
  onPress: any;
}

export const DefaultButton: React.FC<DefaultButtonProps> = (
  props: DefaultButtonProps,
) => {
  const {isLoading, title, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {isLoading === true ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Text>{title}</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#eac364',
    padding: 20,
    borderRadius: 5,
  },
});
