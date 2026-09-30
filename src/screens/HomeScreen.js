import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import useStudent from '../hooks/useStudent';
import { COLORS } from '../config/theme';

export default function HomeScreen({ navigation }) {
  const studentInfo = useStudent();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Información del estudiante</Text>

      <View style={styles.card}>
        {studentInfo.map((item) => (
          <InfoRow key={item.label} label={item.label} value={item.value} />
        ))}
      </View>

      <PrimaryButton
        title="Ver planetas de Dragon Ball"
        onPress={() => navigation.navigate('Planets')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 24,
    alignItems: 'stretch',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 28,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});
