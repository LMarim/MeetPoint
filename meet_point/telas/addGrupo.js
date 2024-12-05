import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones

export default function AddGrupos() {
  return (
    <View style={styles.container}>
      {/* Formulário */}
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.label}>Nomeie o grupo</Text>
        <TextInput style={styles.input} placeholder="Digite o nome do grupo" placeholderTextColor="#6D4C41" />

        <Text style={styles.label}>Localização do encontro</Text>
        <TextInput style={styles.input} placeholder="Digite a localização" placeholderTextColor="#6D4C41" />

        <Text style={styles.label}>Membros</Text>
        <TextInput style={styles.input} placeholder="Digite o nome do membro" placeholderTextColor="#6D4C41" />

        {/* Lista de membros */}
        <View style={styles.membersContainer}>
          <View style={styles.member}>
            <Ionicons name="person-circle-outline" size={40} color="#4E342E" />
            <Text style={styles.memberText}>membro 1</Text>
          </View>
          <View style={styles.member}>
            <Ionicons name="person-circle-outline" size={40} color="#4E342E" />
            <Text style={styles.memberText}>membro 2</Text>
          </View>
          <View style={styles.member}>
            <Ionicons name="person-circle-outline" size={40} color="#4E342E" />
            <Text style={styles.memberText}>membro 3</Text>
          </View>
        </View>
      </ScrollView>

      {/* Botão de confirmação */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="checkmark" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={30} color="#4E342E" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="people-outline" size={30} color="#4E342E" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#4E342E" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    justifyContent: "space-between",
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4E342E",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#D7CCC8",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: "#4E342E",
  },
  membersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  member: {
    alignItems: "center",
  },
  memberText: {
    marginTop: 5,
    fontSize: 12,
    color: "#4E342E",
  },
  button: {
    backgroundColor: "#4E342E",
    borderRadius: 50,
    padding: 15,
    position: "absolute",
    bottom: 80,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#D7CCC8",
    paddingVertical: 10,
  },
});
