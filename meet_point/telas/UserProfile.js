import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Install with `npm install react-native-vector-icons`

const UserProfile = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={28} color="#FFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil do Usuário</Text>
      </View>

      
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Icon name="account-circle" size={100} color="#4a4a4a" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.userId}>UID de usuario</Text>
          <View style={styles.editRow}>
            <Text style={styles.label}>Nome</Text>
            <TouchableOpacity>
              <Icon name="edit" size={20} color="#4a4a4a" />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#4a4a4a"
            editable={false} // Change to true if editing is allowed
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            placeholderTextColor="#4a4a4a"
            editable={false}
          />
        </View>
      </View>

    
      <View style={styles.footerNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={30} color="#4a4a4a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="group" size={30} color="#4a4a4a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person" size={30} color="#4a4a4a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef9e7',
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
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginTop: 5,
    color: '#4a4a4a',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fef9e7',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default UserProfile;
