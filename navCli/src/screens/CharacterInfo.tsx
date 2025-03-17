import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {theme} from '../themes';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

// interface RouterParams {
//   id: number;
//   name: string;
// }
interface CharacterInfoProps
  extends StackScreenProps<RootStackParams, 'PersonajeScreen'> {}

const CharacterInfo = ({navigation, route}: CharacterInfoProps) => {
  const {id, name} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, id, name]);

  return (
    <View style={theme.globalMargin}>
      <Text>PERSONA INFO</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default CharacterInfo;
