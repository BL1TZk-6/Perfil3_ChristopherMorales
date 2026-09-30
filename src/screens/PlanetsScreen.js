import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import usePlanets from '../hooks/usePlanets';
import { COLORS } from '../config/theme';

export default function PlanetsScreen() {
  const { planets, loading, error, refetch } = usePlanets();

  if (loading && planets.length === 0) {
    return (
      <View style={styles.screen}>
        <Loader message="Cargando planetas..." />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.screen}>
        <ErrorMessage message={error} onRetry={refetch} />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.list}
      data={planets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          image={item.image}
          description={item.description}
          badge={item.badge}
          badgeType={item.badgeType}
        />
      )}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: 16,
  },
});
