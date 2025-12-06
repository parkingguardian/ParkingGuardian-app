import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type CarParkMapProps = {
  coords: { latitude: number; longitude: number };
  title: string;
};

export default function CarParkMap({ coords, title }: CarParkMapProps) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={coords} title={title} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { width: '100%', height: 200, borderRadius: 10, marginBottom: 15 },
});