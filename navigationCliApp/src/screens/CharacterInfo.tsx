import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {theme} from '../themes';
import {StackScreenProps} from '@react-navigation/stack';

interface CharacterInfoProps extends StackScreenProps<any, any> {}

const CharacterInfo = ({navigation, route}: CharacterInfoProps) => {
  const {id, name} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation]);

  return (
    <View style={theme.globalMargin}>
      <Text>CharacterInfo</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default CharacterInfo;
