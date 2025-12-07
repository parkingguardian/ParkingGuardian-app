import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CarParkMap from '../components/CarParkMap';

export default function DashboardScreen() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  const [activeOrbit, setActiveOrbit] = useState<'check' | 'forums' | 'appeals' | 'resources' | null>(null);

  const carParkInfo = {
    location: 'Bridgwater Central Car Park',
    operator: 'Parking Guardian Ltd',
    trustpilot: '4.6 ★',
    tariffs: '£2/hr, £10/day',
    times: 'Open 6am – 11pm',
    advisor: [
      'Always display your ticket clearly',
      'Avoid overstaying — common fine £60',
      'Check disabled bays signage',
    ],
    coords: { latitude: 51.127, longitude: -3.003 },
  };

  const handleLogout = () => router.replace('/');

  useEffect(() => {
    let sub: Location.LocationSubscription | null = null;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      sub = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        (pos) => {
          const { latitude, longitude } = pos.coords;
          if (isInsideCarPark(latitude, longitude)) {
            setActiveOrbit('check');
            setShowNotification(true);
          }
        }
      );
    })();

    return () => {
      if (sub && typeof sub.remove === 'function') {
        try {
          sub.remove();
        } catch {}
      }
    };
  }, []);

  function isInsideCarPark(lat: number, lon: number) {
    const carParkLat = 51.127;
    const carParkLon = -3.003;
    const radius = 0.001; // ~100m
    return Math.abs(lat - carParkLat) < radius && Math.abs(lon - carParkLon) < radius;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo1.png')} style={styles.logo} />

        {/* Orbit group */}
        <View style={styles.orbitGroup}>
          {/* Check (top-left) */}
          <Pressable
            style={({ pressed }) => [styles.orbitButton, styles.orbitTopLeft, pressed && styles.orbitPressed]}
            onPress={() => { setActiveOrbit('check'); setShowNotification(true); }}
          >
            <Image source={require('../assets/images/car.png')} style={styles.orbitIcon} />
            <Text style={styles.orbitLabel}></Text>
          </Pressable>

          {/* Forums (bottom-left) */}
          <Pressable
            style={({ pressed }) => [styles.orbitButton, styles.orbitBottomLeft, pressed && styles.orbitPressed]}
            onPress={() => router.push('/forum')}
          >
            <Image source={require('../assets/images/forums.png')} style={styles.orbitIcon} />
            <Text style={styles.orbitLabel}></Text>
          </Pressable>

          {/* Appeals (top-right) */}
          <Pressable
            style={({ pressed }) => [styles.orbitButton, styles.orbitTopRight, pressed && styles.orbitPressed]}
            onPress={() => { setActiveOrbit('appeals'); setShowNotification(true); }}
          >
            <Image source={require('../assets/images/appeals.png')} style={styles.orbitIcon} />
            <Text style={styles.orbitLabel}></Text>
          </Pressable>

          {/* Resources (bottom-right) */}
          <Pressable
            style={({ pressed }) => [styles.orbitButton, styles.orbitBottomRight, pressed && styles.orbitPressed]}
            onPress={() => { setActiveOrbit('resources'); setShowNotification(true); }}
          >
            <Image source={require('../assets/images/resources.png')} style={styles.orbitIcon} />
            <Text style={styles.orbitLabel}></Text>
          </Pressable>
        </View>

        {/* Modal */}
        <Modal visible={showNotification} animationType="slide" transparent>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
              >
                <ScrollView keyboardShouldPersistTaps="handled">
                  {activeOrbit === 'check' && (
                    <>
                      <CarParkMap coords={carParkInfo.coords} title={carParkInfo.location} />
                      <Text style={styles.modalTitle}>{carParkInfo.location}</Text>
                      <Text style={styles.modalText}>🏢 {carParkInfo.operator}</Text>
                      <Text style={styles.modalText}>⏰ {carParkInfo.times}</Text>
                      <Text style={styles.modalText}>💰 {carParkInfo.tariffs}</Text>
                      <Text style={styles.modalText}>⭐ {carParkInfo.trustpilot}</Text>
                      <Text style={styles.modalSubtitle}>⚠️ Things to watch out for:</Text>
                      {carParkInfo.advisor.map((tip, i) => (
                        <Text key={i} style={styles.modalText}>- {tip}</Text>
                      ))}
                    </>
                  )}

                  {activeOrbit === 'forums' && (
                    <>
                      <Text style={styles.modalTitle}></Text>
                      <Text style={styles.modalText}>Discuss local parking issues, share advice, and learn from others.</Text>
                    </>
                  )}

                  {activeOrbit === 'appeals' && (
                    <>
                      <Text style={styles.modalTitle}>Appeals</Text>
                      <Text style={styles.modalText}>Step-by-step guidance for challenging unfair tickets with evidence.</Text>
                    </>
                  )}

                  {activeOrbit === 'resources' && (
                    <>
                      <Text style={styles.modalTitle}>Resources</Text>
                      <Text style={styles.modalText}>Templates, checklists, and rules for car parks and MOT-related topics.</Text>
                    </>
                  )}

                  <Pressable
                    style={styles.closeButton}
                    onPress={() => { setShowNotification(false); setActiveOrbit(null); }}
                  >
                    <Text style={styles.closeText}>Close</Text>
                  </Pressable>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </View>
        </Modal>

        <Pressable style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0F14' },
  logo: { width: 340, height: 340, marginBottom: 0 },

  orbitGroup: {
    width: 280,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 40,
  },
  orbitButton: {
    width: 100,
    height: 110,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    outlineStyle: 'none',
    outlineWidth: 0,
    outlineColor: 'transparent',
  },
  orbitPressed: { opacity: 0.85 },
  orbitIcon: { width: 110, height: 110, resizeMode: 'contain' },
  orbitLabel: { color: '#f2fbfcff', fontSize: 14, fontWeight: '800', marginTop: 4, textAlign: 'center' },

  orbitTopLeft: { top: 10, left: 20 },
  orbitBottomLeft: { bottom: 10, left: 20 },
  orbitTopRight: { top: 10, right: 20 },
  orbitBottomRight: { bottom: 10, right: 20 },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#1A1F26', borderRadius: 12, padding: 20, width: '90%', maxHeight: '80%' },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  modalSubtitle: { fontSize: 18, fontWeight: 'bold', color: '#FF6600', marginTop: 10 },
  modalText: { fontSize: 16, color: '#fff', marginVertical: 2 },
  closeButton: { backgroundColor: 'purple', padding: 10, borderRadius: 8, marginTop: 15 },
  closeText: { color: '#fff', fontSize: 16, textAlign: 'center' },
  button: { backgroundColor: '#0b4fe0ff', padding: 12, borderRadius: 8, marginVertical: 10, width: 220 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});