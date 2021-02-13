import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Reviews extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Reviews Page</Text>
      </View>
    );
  }
}

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});