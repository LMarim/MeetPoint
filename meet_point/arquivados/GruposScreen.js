// telas/GruposScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const grupos = [
  { id: '1', nome: 'Nome do grupo', destino: 'Destino da viagem' },
  { id: '2', nome: 'Nome do grupo 2', destino: 'Destino da viagem' },
];

export default function GruposScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={grupos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.groupItem}
            onPress={() => navigation.navigate('Chat', { groupName: item.nome })}
          >
            <Text style={styles.groupName}>{item.nome}</Text>
            <Text style={styles.groupDestination}>{item.destino}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF2D9',
    padding: 20,
  },
  groupItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
  groupDestination: {
    fontSize: 14,
    color: '#3E3E3E',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#3E3E3E',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
});
