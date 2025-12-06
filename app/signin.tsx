import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    console.log("Signing in with:", email);
    router.replace('/dashboard'); // navigate to dashboard
  };

  return (
    <View style={styles.container}>
      {/* Logo at top */}
      <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        autoComplete="off"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        autoComplete="off"
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign In button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0F14' },
  logo: { width: 440, height: 440, marginBottom: 40 }, // consistent branding
  title: { fontSize: 24, color: '#fff', marginBottom: 20 },
  input: { backgroundColor: '#222', color: '#fff', padding: 12, borderRadius: 8, marginVertical: 10, width: 250 },
  button: { backgroundColor: '#FF6600', padding: 12, borderRadius: 8, marginTop: 20, width: 250 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});