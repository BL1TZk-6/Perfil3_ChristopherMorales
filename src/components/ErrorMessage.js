import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { COLORS } from '../config/theme';

// Mensaje de error reutilizable con opción de reintentar.
export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Ups! Algo salió mal</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry ? <PrimaryButton title="Reintentar" onPress={onRetry} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.danger,
    marginBottom: 8,
  },
  message: {
    fontSize: 15,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: 20,
  },
});
