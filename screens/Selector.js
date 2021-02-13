import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
            <Image style = {styles.logoContainer}  source = {require('../assets/logo.png')} />
            <Image style = {styles.logoContainer}  source = {require('../assets/logo.png')} />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#3D9C9C',
      alignItems: 'center',
      justifyContent: 'center',
   },
   logoContainer:{
    backgroundColor: '#3D9C9C',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 180,
   }
});