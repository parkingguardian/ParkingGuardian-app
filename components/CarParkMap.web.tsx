import { StyleSheet, Text, View } from 'react-native';

export default function CarParkMap() {
  return (
    <View style={[styles.map, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={{ color: '#fff' }}>Map not available in web preview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  map: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
});