// app/components/Button.tsx
import { Href, Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  href: Href;   // <-- use Expo Router's Href type
  label: string;
};

export default function Button({ href, label }: ButtonProps) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>{label}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#9D00FF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});