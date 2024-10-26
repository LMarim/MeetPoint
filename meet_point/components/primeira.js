import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Primeira() {
  return (
    <View style={styles.container}>
      {/* Icone no topo */}
      <View style={styles.iconContainer}>
        <Image
          source={require('./assets/icon.png')} // Substitua pela imagem do ícone
          style={styles.icon}
        />
      </View>

      {/* Texto principal */}
      <Text style={styles.title}>MEET POINT</Text>
      <Text style={styles.subtitle}>Defina a sua rota em conjunto!</Text>

      {/* Seção de boas-vindas */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Bem vindo(a)</Text>
        <Text style={styles.welcomeText}>
          Essa é área de cadastro para todos os usuários. Clique em login caso já possua um cadastro e em cadastro caso não possua.
        </Text>

        {/* Botões de Login e Cadastro */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d', // Fundo escuro
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80, // Tamanho da imagem do ícone
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto branco
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF', // Texto branco
    marginBottom: 40,
  },
  welcomeContainer: {
    backgroundColor: '#fef9c3', // Fundo amarelo claro
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333', // Texto escuro
  },
  welcomeText: {
    fontSize: 16,
    color: '#333333', // Texto escuro
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#a07a55', // Marrom claro
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#4b4b4b', // Cinza escuro
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
