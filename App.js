import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Instagram from './screens/in';
import Facebook from './screens/fb';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}}

const tabNavigator = createBottomTabNavigator({
  Facebook: {screen:Facebook},
  Instagram: {screen:Instagram}
})

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
