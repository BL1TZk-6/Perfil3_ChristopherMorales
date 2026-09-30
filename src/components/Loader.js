import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../config/theme';

// Indicador de carga reutilizable.
export default function Loader({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.text}>{message}</Text>
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
  text: {
    marginTop: 12,
    fontSize: 16,
    color: COLORS.textMuted,
  },
});
