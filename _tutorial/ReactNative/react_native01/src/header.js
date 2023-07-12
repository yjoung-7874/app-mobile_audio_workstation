import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = (props) => (
  <TouchableOpacity 
  style={styles.header}
  onPress={()=>alert('hello world')}
  onPressIn={()=>alert('hello world')}
  onPressOut={()=>alert('hello world')}
  onLongPress={()=>alert('hello world')}
  >
    <View style={styles.header}>
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
) // returns JSX <View>

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%'
  }
})

// * JSX(JavaScript XML)
// const example = <Text>hello world</Text>

// no returned JSX component
// exampleFunction = () => {
// }

// return JSX component
// exampleFunction = () => (
// )

// TouchableOpacity : https://reactnative.dev/docs/touchableopacity 


export default Header;
