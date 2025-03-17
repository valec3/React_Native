import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CharactersScreen from '../screens/CharactersScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import SearchScreen from '../screens/SearchScreen';
import CharacterInfo from '../screens/CharacterInfo';

export type RootStackParams = {
  CharactersScreen: undefined;
  SearchScreen: undefined;
  PlanetsScreen: undefined;
  PersonajeScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowColor: 'transparent', // remove shadow on iOS
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Personajes" component={CharactersScreen} />
      <Stack.Screen name="Planetas" component={PlanetsScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Personaje" component={CharacterInfo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
