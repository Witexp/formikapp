/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'

import configureStore from './src/redux/store'
import Content from './src/Content';

const store = configureStore();



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Content/> 
        </View>
      </Provider>
    );
  };
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

