import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Certifique-se de ter instalado o pacote

export default function Mapas() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  // Solicita permissão de localização
  async function requestLocationPermissions() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    } else {
      setPermissionDenied(true); // Define como verdadeiro caso a permissão seja negada
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  // Dados fictícios dos membros do grupo (substitua pelos dados reais)
  const members = [
    { id: 1, image: 'https://via.placeholder.com/50', name: 'Membro 1' },
    { id: 2, image: 'https://via.placeholder.com/50', name: 'Membro 2' },
    { id: 3, image: 'https://via.placeholder.com/50', name: 'Membro 3' },
    { id: 4, image: 'https://via.placeholder.com/50', name: 'Membro 4' },
  ];

  return (
    <View style={styles.container}>
      {/* Barra lateral com os membros */}
      <View style={styles.sidebar}>
        {members.map((member) => (
          <TouchableOpacity
            key={member.id}
            onPress={() => alert(`Você clicou no ${member.name}`)} // Ação ao clicar no membro
            style={styles.memberButton}
          >
            <Image source={{ uri: member.image }} style={styles.memberImage} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Mapa */}
      {location ? (
        <MapView
          style={styles.map}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      ) : permissionDenied ? (
        <Text style={styles.errorText}>Permissão de localização negada. Ative-a nas configurações.</Text>
      ) : (
        <Text style={styles.loadingText}>Carregando localização...</Text>
      )}

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Lgrupos')}
          accessibilityLabel="Ir para grupos"
        >
          <Ionicons name="home" size={30} color="#4E342E" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('conta')}
          accessibilityLabel="Ir para conta"
        >
          <Ionicons name="person" size={30} color="#4E342E" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Alinha o sidebar ao lado do mapa
    backgroundColor: '#FFF9E5',
  },
  sidebar: {
    width: 60, // Largura da barra lateral
    backgroundColor: '#333', // Cor de fundo
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  memberButton: {
    marginBottom: 20,
    alignItems: 'center',
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Imagem circular
    borderWidth: 2,
    borderColor: '#FFF',
  },
  map: {
    flex: 1,
    marginLeft: 10, // Espaço entre o mapa e a barra lateral
    borderRadius: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D7CCC8',
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  loadingText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
