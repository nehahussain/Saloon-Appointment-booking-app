  
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Services extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Services Page</Text>
      </View>
    );
  }
}

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});