/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicatorBase,
  Pressable,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <Header />
        </View>
        <View>
          <Text
            style={{
              color: isDarkMode ? Colors.white : Colors.black,
              fontSize: 24,
              fontWeight: '600',
              padding: 10,
            }}>
            PRUEBA
          </Text>
          <Pressable
            style={({pressed}) => {
              return [
                {
                  backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : 'rgb(220, 240, 255)',
                  padding: 10,
                  borderRadius: 5,
                  margin: 10,
                },
              ];
            }}>
            <Text style={{color: 'black'}}>Buy Now</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
