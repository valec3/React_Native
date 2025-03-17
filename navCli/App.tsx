import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import './gesture-handler';
import StackNavigator from './src/navigator/StackNavigator';
import MyDrawer from './src/navigator/DrawerNavigation';
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
