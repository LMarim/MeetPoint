import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const groupsData = [
  { id: '1', name: 'Nome do grupo', destination: 'Destino da viagem' },
  { id: '2', name: 'Nome do grupo 2', destination: 'Destino da viagem' },
];

const Lgrupos = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Grupos');

  const renderTab = (tabName) => (
    <TouchableOpacity
      style={[
        styles.tab,
        activeTab === tabName && styles.activeTab,
      ]}
      onPress={() => {
        setActiveTab(tabName);
        if (tabName === 'Grupos') navigation.navigate('Lgrupos');
        if (tabName === 'Contatos') navigation.navigate('Lcontatos');
        if (tabName === 'Solicitações') navigation.navigate('solicitacoes');
      }}
    >
      <Text style={[styles.tabText, activeTab === tabName && styles.activeTabText]}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );

  const renderGroup = ({ item }) => (
    <View style={styles.groupContainer}>
      <Text style={styles.groupName}>{item.name}</Text>
      <Text style={styles.groupDestination}>{item.destination}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Tabs */}
      <View style={styles.header}>
        {renderTab('Grupos')}
        {renderTab('Contatos')}
        {renderTab('Solicitações')}
      </View>

      {/* Group List */}
      <FlatList
        data={groupsData}
        keyExtractor={(item) => item.id}
        renderItem={renderGroup}
        style={styles.list}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddGrupos')} // Navega para a tela de adicionar grupos
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Lgrupos")}>
          <Ionicons name="people-outline" size={30} color="#4E342E" />
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
    backgroundColor: '#FFF9E5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    color: '#ccc',
    fontSize: 16,
  },
  activeTab: {
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  groupContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFF9E5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  groupDestination: {
    fontSize: 14,
    color: '#4A4A4A',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#333',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#D7CCC8",
    paddingVertical: 10,
  },
});

export default Lgrupos;
