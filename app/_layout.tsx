import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ title: 'Sign In' }} />
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="dashboard" options={{ title: 'Dashboard' }} />
    </Stack>
  );
}