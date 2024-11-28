import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const Solicitacoes = () => {
  const [contatos, setContatos] = useState([
    { id: '1', nome: 'contato 1', checked: false },
    { id: '2', nome: 'contato 2', checked: false },
    { id: '3', nome: 'contato 3', checked: false },
    { id: '4', nome: 'contato 4', checked: false },
  ]);

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

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.icon}>
      <Text style={styles.avatarText}>👤</Text>
      </View>
      <Text style={styles.nome}>{item.nome}</Text>
      <TouchableOpacity onPress={() => handleCheck(item.id)}>
        <Icon name={item.checked ? "check-box" : "check-box-outline-blank"} size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );

  const handleCheck = (id) => {
    setContatos(prevContatos => 
      prevContatos.map(contato =>
        contato.id === id ? { ...contato, checked: !contato.checked } : contato
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {renderTab('Grupos')}
        {renderTab('Contatos')}
        {renderTab('Solicitações')}
      </View>
      
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Aceitar</Text>
      </TouchableOpacity>

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
    backgroundColor: '#FFFBEC',
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
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C8A165',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#705A48',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFF',
    fontSize: 18,
  },
  nome: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#3C2F2F', 
    padding: 16, 
    alignItems: 'center', 
    margin: 16, 
    borderRadius: 10, 
},
    buttonText: { 
        color: '#FFF', 
        fontSize: 16, 
        fontWeight: 'bold', 
    }, 
    bottomNavigation: { flexDirection: 'row', 
        justifyContent: 'space-around', 
        backgroundColor: '#FFF9E5', 
        paddingVertical: 10, 
        borderTopWidth: 1, 
        borderColor: '#e0e0e0', 
    }, 
});

export default Solicitacoes;