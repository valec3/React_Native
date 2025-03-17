import {createDrawerNavigator} from '@react-navigation/drawer';
import CharactersScreen from '../screens/CharactersScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import {Button, useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const width = useWindowDimensions().width;
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerActiveTintColor: 'green',
      })}>
      <Drawer.Screen name="Home" component={CharactersScreen} />
      <Drawer.Screen name="Profile" component={PlanetsScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
