import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons"; 

const AddContactScreen = ({ navigation }) => {
  const [contactId, setContactId] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddContact = () => {
    if (contactId.trim()) {
      setContacts([...contacts, contactId]); // Adiciona o novo contato à lista
      setContactId(''); // Limpa o campo de entrada
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Adicionar contato</Text>
      </View>

      <Text style={styles.label}>Digite o ID:</Text>
      <TextInput
        style={styles.input}
        placeholder="Busque o usuário pelo ID"
        placeholderTextColor="#6e6e6e"
        value={contactId}
        onChangeText={setContactId}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactButton}>
            <Icon name="user-circle" size={24} color="#000" style={styles.icon} />
            <Text style={styles.contactText}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum contato adicionado ainda.</Text>
        }
      />

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Lgrupos")}>
          <Ionicons name="home" size={30} color="#4E342E" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("conta")}>
          <Ionicons name="person" size={30} color="#4E342E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF9E5', 
    justifyContent: "space-between",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: '#6e6e6e',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#EDEDED',
    marginLeft: 10,
    marginRight: 10,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8B999',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#6e6e6e',
    paddingVertical: 12,
    borderRadius: 8,
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  emptyText: {
    textAlign: 'center',
    color: '#6e6e6e',
    marginTop: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#D7CCC8",
    paddingVertical: 10,
  },
});

export default AddContactScreen;
