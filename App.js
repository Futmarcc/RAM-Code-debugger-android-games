import React, {Component} from 'react';
import { NativeModules, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  state = {
    lowMemory: true,
  }

  componentDidMount() {
    NativeModules.MDebugger.isLowMemory()
    .then(lowMemory => {
      this.setState({ lowMemory })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.lowMemory
          ? <Text style={styles.text}>MEMORY INTENSIVE NOT ALLOWED</Text>
          : <Text style={styles.text}>YOU CAN DO ANYTHING!</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
