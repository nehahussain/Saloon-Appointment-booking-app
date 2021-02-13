import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AppointmentScreen = () => {
    return (
      <View style={styles.container}>
        <Text>AppointmentScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
