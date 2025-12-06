import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();

  // State for all fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [registration, setRegistration] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Validation
    if (!name || !phone || !email || !make || !model || !registration || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // For now, just log details
    console.log("Signing up with:", { name, phone, email, make, model, registration });

    // Navigate to dashboard
    router.replace('/dashboard');
  };

  return (
    <View style={styles.container}>
      {/* Logo at top */}
      <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>

      {/* Input fields */}
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#aaa" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#aaa" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Vehicle Make" placeholderTextColor="#aaa" value={make} onChangeText={setMake} />
      <TextInput style={styles.input} placeholder="Vehicle Model" placeholderTextColor="#aaa" value={model} onChangeText={setModel} />
      <TextInput style={styles.input} placeholder="Vehicle Registration" placeholderTextColor="#aaa" value={registration} onChangeText={setRegistration} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#aaa" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

      {/* Sign Up button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0F14' },
  logo: { width: 440, height: 440, marginBottom: 40 }, // consistent branding
  title: { fontSize: 24, color: '#fff', marginBottom: 20 },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    width: 250,
  },
  button: { backgroundColor: '#FF6600', padding: 12, borderRadius: 8, marginTop: 20, width: 250 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});