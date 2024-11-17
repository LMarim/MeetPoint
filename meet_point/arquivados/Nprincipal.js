// telas/NavegacaoPrincipal.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GruposScreen from './GruposScreen';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Grupos" component={GruposScreen} />
      <Tab.Screen name="Contatos" component={EmptyScreen} />
      <Tab.Screen name="Solicitações" component={EmptyScreen} />
    </Tab.Navigator>
  );
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Conteúdo em desenvolvimento</Text>
    </View>
  );
}

export default function Nprincipal() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
