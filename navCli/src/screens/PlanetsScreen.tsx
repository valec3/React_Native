import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {theme} from '../themes';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const PlanetsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Atras',
      title: 'Planetas',
    });
  }, [navigation]);
  return (
    <View style={theme.globalMargin}>
      <Text>PlanetsScreen</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
};

export default PlanetsScreen;
