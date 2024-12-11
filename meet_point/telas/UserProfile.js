import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Ionicons } from '@expo/vector-icons';

const UserProfile = ({ navigation }) => {
  const [image, setImage] = useState('https://e7.pngegg.com/pngimages/722/101/png-clipart-computer-icons-user-profile-circle-abstract-miscellaneous-rim.png');
  const [isEditing, setIsEditing] = useState(false);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const toggleEdit = () => {
    setIsEditing(prevState => !prevState);  // Alterna entre modo de edição e visualização
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil do Usuário</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: image }} style={styles.profileImage} />

          <TouchableOpacity style={styles.perfilImage} onPress={handleImagePicker}>
            <Text style={styles.textPerfilImage}>Foto de perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.userId}>UID de usuario</Text>
          <View style={styles.editRow}>
            <Text style={styles.label}>Nome</Text>
            <TouchableOpacity onPress={toggleEdit}>
              <Icon name="edit" size={20} color="#4a4a4a"/>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#4a4a4a"
            editable={true} // Change to true if editing is allowed
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            placeholderTextColor="#4a4a4a"
            editable={true}
          />
        </View>
      </View>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Lgrupos')}>
          <Ionicons name="people-outline" size={30} color="#4E342E" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('conta')}>
          <Ionicons name="person" size={30} color="#4E342E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
  },
  header: {
    backgroundColor: '#4E4039',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#FFFF',
  },
  perfilImage: {
    width: 80,  // Tamanho ajustado do botão
    height: 60, // Tamanho ajustado do botão
    backgroundColor: '#4E4039',
    borderRadius: 10, // Deixa o botão redondo
    alignItems: 'center',  // Alinha o conteúdo centralizado
    justifyContent: 'center', // Garante que o texto esteja centralizado
    marginTop: 4,
    padding: 3,
    left: 11,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textPerfilImage: {
    fontSize: 15,
    color: '#ffff',
    fontWeight: 'bold',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileInfo: {
    width: '90%',
  },
  userId: {
    fontSize: 14,
    color: '#4a4a4a',
    marginBottom: 10,
  },
  editRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#4a4a4a',
    marginTop: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginTop: 5,
    color: '#4a4a4a',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D7CCC8',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default UserProfile;
