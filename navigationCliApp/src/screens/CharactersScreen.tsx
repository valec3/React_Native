import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {theme} from '../themes';

interface CharactersScreenProps extends StackScreenProps<any, any> {}

const CharactersScreen = ({navigation}: CharactersScreenProps) => {
  return (
    <View style={theme.globalMargin}>
      <Text>CharactersScreen</Text>
      <Button
        title="Go to Planetas"
        onPress={() => navigation.navigate('Planetas')}
      />
      <Button
        title="Go to INFO PERSONAJE"
        onPress={() =>
          navigation.navigate('Personaje', {
            id: 1,
            name: 'JUAN',
          })
        }
      />
    </View>
  );
};

export default CharactersScreen;
