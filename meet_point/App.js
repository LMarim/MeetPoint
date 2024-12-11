import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Primeira from './telas/primeira';
import Lgrupos from './telas/Lgrupos';
import Lcontatos from './telas/Lcontatos';
import Conta from './telas/conta';
import UserProfile from './telas/UserProfile';
import Solicitacoes from './telas/solicitacoes';
import AddContatos from './telas/addContatos';
import AddGrupos from './telas/addGrupo';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="primeira">
          
          <Stack.Screen 
          name="primeira" 
          component={Primeira} 
          options={{headerShown: false}}
          />

          <Stack.Screen
            name="Lgrupos"
            component={Lgrupos}
            options={{ headerShown: false }}
          />
          
          <Stack.Screen
            name="AddGrupos"
            component={AddGrupos}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Lcontatos"
            component={Lcontatos}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="solicitacoes"
            component={Solicitacoes}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="conta"
            component={Conta}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AddContatos"
            component={AddContatos}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="UseProfile"
            component={UserProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }