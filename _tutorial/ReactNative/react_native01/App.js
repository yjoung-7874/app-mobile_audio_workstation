/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// // ex1) inline styling
// class App extends Component {
//   render() {
//     return (
//       <View style={{
//         backgroundColor: 'green',
//         height: '100%',
//         marginTop: 10, // gap with external component
//         paddingTop:50  // gap with internal component
//       }}>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//       </View>
//     )
//   }
// }

// // ex2) stylesheet component1
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.mainView}>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   mainView: {
//     backgroundColor: 'green',
//     flex: 1,
//     alignItems: 'center',     // horizontal alignment
//     justifyContent: 'center', // vertical alignment
//     marginTop: 10,            // gap with external component
//     paddingTop:50             // gap with internal component
//   },
// })

// // ex3) stylesheet component2
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.mainView}>
//         <View style={styles.subView}>
//           <Text style={styles.mainText}>Hello world</Text>
//         </View>
//         <View style={styles.subView}>
//           <Text>Hello world</Text>
//         </View>
//         <View style={styles.anotherSubView}>
//           <Text style={styles.mainText}>Hello world</Text>
//         </View>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   mainView: {
//     backgroundColor: 'green',
//     alignItems: 'center',     // horizontal alignment
//     justifyContent: 'center', // vertical alignment
//     marginTop: 10,            // gap with external component
//     paddingTop:10,             // gap with internal component
//     flex: 1,                  // take all screen
//   },
//   subView: {
//     backgroundColor: 'yellow',
//     marginBottom: 10,
//     flex: 1,
//     width: '50%'              // line breaking: lower lever component follows higher level component (Text is wrapped in View)
//   },
//   anotherSubView: {
//     backgroundColor: 'yellow',
//     marginBottom: 10,
//     flex: 2,                  // subView:antherSubView = 1:2
//     width: '100%',
//     alignItems: 'center',     // horizontal alignment
//     justifyContent: 'center', // vertical alignment
//   },
//   mainText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'red',
//     padding: 20
//   }
// })

// // ex4) touch event
import Header from './src/header'

// class App extends Component {
//   state = {
//     name: 'my first app'
//   }

//   render() {
//     return (
//       <View style={styles.mainView}>
//         <Header name={this.state.name}/>  
//       </View>
//     )
//   }
// }

// ex5) touch event2 
class App extends Component {
  state = {
    name: 'my first app'
  }

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.name}/>   */}
        <Text
          style={styles.mainText}
          onPress={() => alert("text touch event")}
        >Hello world</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,                  // take all screen
    backgroundColor: 'white',
    paddingTop: 50,             // gap with internal component
    alignItems: 'center',     // horizontal alignment
    justifyContent: 'center', // vertical alignment
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  }
})

export default App;