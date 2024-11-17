// telas/ChatScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bate-papo - {route.params.groupName}</Text>
      {/* Adicione aqui o conteúdo do bate-papo */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF2D9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E3E3E',
  },
});
