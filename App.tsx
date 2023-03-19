import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BetwayScreen from './src/BetwayScreen';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'green',
            width: 140,
          },
          // headerStyle: {
          //   backgroundColor: 'red',
          // },
        }}>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="betway" component={BetwayScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
