import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const contactsData = [
  { id: '1', name: 'Contato 1', description: 'Número do contato 1' },
  { id: '2', name: 'Contato 2', description: 'Número do contato 2' },
];

const Lcontatos = () => {
  const [activeTab, setActiveTab] = useState('Grupos');

  const renderTab = (tabName) => (
    <TouchableOpacity
      style={[
        styles.tab,
        activeTab === tabName && styles.activeTab,
      ]}
      onPress={() => setActiveTab(tabName)}
    >
      <Text style={[styles.tabText, activeTab === tabName && styles.activeTabText]}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );

  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactDescription}>{item.description}</Text>
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
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
        style={styles.list}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Icon name="home" size={28} color="#000" />
        <Icon name="group" size={28} color="#000" />
        <Icon name="person" size={28} color="#000" />
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
  contactContainer: {
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
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  contactDescription: {
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
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF9E5',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default Lcontatos;
