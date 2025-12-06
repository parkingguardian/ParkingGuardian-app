import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Large logo */}
      <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Parking Guardian </Text>

      {/* Navigation buttons */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/signin')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0F14' },
  logo: { width: 440, height: 440, marginBottom: 40 }, // updated size
  title: { fontSize: 26, color: '#fff', marginBottom: 40, fontWeight: 'bold' },
  button: { backgroundColor: '#FF6600', padding: 14, borderRadius: 8, marginVertical: 10, width: 220 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});