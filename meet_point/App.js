import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  const [showLoginForm, setShowLoginForm] = useState(false); // Estado para controlar o formulário de login
  const [showSignupForm, setShowSignupForm] = useState(false); // Estado para controlar o formulário de cadastro

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

      {/* Condição para exibir o formulário de login, cadastro ou a área de boas-vindas */}
      {showLoginForm ? (
        // Formulário de Login
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>LOGAR NO MEETPOINT</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="email@email.com"
              placeholderTextColor="#999"
              style={styles.input}
            />
           
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          {/* Botões de Login e Cadastro no formulário */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>ou</Text>
            <TouchableOpacity style={styles.signupButton} onPress={() => { setShowLoginForm(false); setShowSignupForm(true); }}>
              <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : showSignupForm ? (
        // Formulário de Cadastro
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>CADASTRE-SE NO MEETPOINT</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Nome Completo"
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="email@email.com"
              placeholderTextColor="#999"
              style={styles.input}
            />
           
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity>
            
            </TouchableOpacity>
          </View>

          {/* Botões para Cadastro */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>ou</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => { setShowSignupForm(false); setShowLoginForm(true); }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // Seção de boas-vindas
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Bem vindo(a)</Text>
          <Text style={styles.welcomeText}>
            Essa é área de cadastro para todos os usuários. Clique em login caso já possua um cadastro e em cadastro caso não possua.
          </Text>

          {/* Botões de Login e Cadastro */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => setShowLoginForm(true)}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupButton} onPress={() => setShowSignupForm(true)}>
              <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  formContainer: {
    backgroundColor: '#fef9c3', // Fundo amarelo claro
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333', // Texto escuro
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333333',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  iconCheck: {
    width: 20,
    height: 20,
  },
  iconEye: {
    width: 20,
    height: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#333333',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  orText: {
    color: '#333333',
    marginVertical: 10,
    fontSize: 16,
  },
});
