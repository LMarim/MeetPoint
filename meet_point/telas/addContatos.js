
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddContactScreen = () => {
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

      <Text style={styles.label}>Digite id</Text>
      <TextInput
        style={styles.input}
        placeholder="Busque o usuário pelo id"
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E3', 
    padding: 16,
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
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#6e6e6e',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#EDEDED',
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
});

export default AddContactScreen;






