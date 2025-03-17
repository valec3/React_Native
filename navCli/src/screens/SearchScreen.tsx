import {View, Text, Button} from 'react-native';
import React from 'react';
import {theme} from '../themes';
import {StackScreenProps} from '@react-navigation/stack';
interface SearchScreenProps extends StackScreenProps<any, any> {}
const SearchScreen = ({navigation}: SearchScreenProps) => {
  return (
    <View style={theme.globalMargin}>
      <Text>SearchScreen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />

      <Button title="Ir a Personajes" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default SearchScreen;
