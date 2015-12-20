'use strict()';

import React from 'react-native';
let {AppRegistry, StyleSheet, Text, View, TextInput} = React;
import english_german from 'english_german.json';

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

let App = React.createClass({

  getInitialState: () => {
    return {input: '', output: ''};
  },

  showMeaning: () => {
    let meaning = this.state.input in english_german
      ? english_german[this.state.input]
      : 'Not Found';

    this.setState({output: meaning});
  },

  render: () => {

    return(

      <View style= {styles.parent}>
        <Text>
          Type something in english
        </Text>

        <React.TextInput text= {this.state.input} onChangeText={(e) => this.setState({input: e})} onSubmitEditing= {this.showMeaning}/>

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
