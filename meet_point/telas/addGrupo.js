import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function AddGrupos() {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState(""); // Estado para o nome do grupo
  const [groupLocation, setGroupLocation] = useState(""); // Estado para a localização
  const [groupMember, setGroupMember] = useState(""); // Estado para o nome de um membro

  const handleAddGroup = () => {
    if (groupName.trim()) {
      navigation.navigate("Lgrupos", { newGroup: { name: groupName, destination: groupLocation } });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.label}>Nomeie o grupo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do grupo"
          placeholderTextColor="#6D4C41"
          value={groupName}
          onChangeText={setGroupName}
        />

        <Text style={styles.label}>Localização do encontro</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a localização"
          placeholderTextColor="#6D4C41"
          value={groupLocation}
          onChangeText={setGroupLocation}
        />

        <Text style={styles.label}>Membros</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do membro"
          placeholderTextColor="#6D4C41"
          value={groupMember}
          onChangeText={setGroupMember}
        />
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleAddGroup}>
        <Ionicons name="checkmark" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
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
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  member: {
    backgroundColor: "#D7CCC8",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  memberText: {
    fontSize: 14,
    color: "#4E342E",
  },
  addButton: {
    backgroundColor: "#4E342E",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
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
