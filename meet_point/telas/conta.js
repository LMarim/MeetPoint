import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Conta = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.username}>Nome de Usuário</Text>
      </View>
      
      
      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="user" size={20} color="#4E4039" style={styles.icon} />
          <Text style={styles.menuText}>Perfil do usuário</Text>
          <Icon name="chevron-right" size={20} color="#4E4039" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="cog" size={20} color="#4E4039" style={styles.icon} />
          <Text style={styles.menuText}>Configurações</Text>
          <Icon name="chevron-right" size={20} color="#4E4039" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="sign-out" size={20} color="#4E4039" style={styles.icon} />
          <Text style={styles.menuText}>Desconectar</Text>
          <Icon name="chevron-right" size={20} color="#4E4039" />
        </TouchableOpacity>
      </ScrollView>

      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={25} color="#4E4039" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="users" size={25} color="#4E4039" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={25} color="#4E4039" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F2C2', 
  },
  header: {
    backgroundColor: '#4E4039',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  username: {
    color: '#F8F2C2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F2C2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#4E4039',
  },
  icon: {
    marginRight: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4E4039',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default Conta;
