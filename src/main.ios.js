/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
//  */
// import {AppRegistry} from 'react-native';
// import App from './components/App';
//
// class Root extends App {
//   static defaultProps = {
//     ...App.defaultProps,
//     instructions: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
//   }
// }
//
// AppRegistry.registerComponent('App', () => Root);


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import react = from 'react-native';
let {AppRegistry, StyleSheet, Text, View, TextInput} = React;

var styles = StyleSheet.create({

  parent: {
    padding: 16
  },

  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold'
  },
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  }
});

var Dictionary = React.createClass({
  render: function() {
getIntialState : ()

    return (
      <View style= {styles.parent}>
        <Text>
          Type something in english
        </Text>
        <TextInput/>
        <Text style= {styles.germanLabel}>
          Its German equivalent is:
        </Text>
        <Text style= {styles.germanWord}></Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
