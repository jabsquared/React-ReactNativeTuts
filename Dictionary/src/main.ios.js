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

import React from 'react-native';
let {AppRegistry, StyleSheet, Text, View, TextInput} = React;
const styles = StyleSheet.create({

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
//
// var a2 = a.map(function(s){ return s.length });
//
// var a3 = a.map( s => s.length );


getInitialState: () => {
  return {input: '', output: ''};
}

let App = React.createClass({


  render: () => {


    return(

      <View style= {styles.parent}>
        <Text>
          Type something in english
        </Text>

        <TextInput text= {this.state.input.bind(this)} onChange={(e) => this.setState({input: e})}/>

        <Text style= {styles.germanLabel}>
          Its German equivalent is:
        </Text>
        <Text style= {styles.germanWord}>
          {this.state.output}
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('App', () => App);
