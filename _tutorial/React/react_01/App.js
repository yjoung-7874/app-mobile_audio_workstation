/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropsChild from './propsChild';

// // ex1)
// class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello world</Text>
//       </View>
//     )
//   }
// }
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
// // ex2)
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.background}>
//         <Text>Hello world</Text>
//       </View>
//     )
//   }
// }

// // ex3) ** 'state' 
// //       : 'Javascript object' that stores and manages data which would be rendered in 'Component'
// //         only available in 'class component' not in 'fuction component'
// //
// //         ex) function component
// //             const App = () => {
// //               return (
// //
// //               )
// //             }
// class App extends Component {
//   state = {
//     sampleText: 'Hello world',
//   }

//   render() { 
//     return ( // 'this' is javascript syntax pointing class 'App'
//       <View style={styles.background}>
//         <Text>{this.state.sampleText}</Text> 
//       </View>
//     )
//   }
// }

// // ex4) 
// class App extends Component {
//   state = {
//     sampleText: 'Hello world',
//     sampleBoolean: true // false
//   } // where state is initialized => use setState to change state

//   inputText = () => (
//     this.state.sampleBoolean ?
//     <Text>sampleBoolean is true</Text>:
//     <Text>sampleBoolean is false</Text>
//   )

//   render() { 
//     return ( // 'this' is javascript syntax pointing class 'App'
//       <View style={styles.background}>
//         {this.inputText()}
//       </View>
//     )
//   }
// }

// // ex5) 'setState' : 'state' must changed by using 'setState()'(function asynchronously reserves update of state object)
// class App extends Component {
//   state = {
//     sampleText: 'Hello world',
//     sampleBoolean: true // false
//   } // where state is initialized

//   changeState = () => {
//     if (!this.state.sampleBoolean) {
//       this.setState({
//         sampleText:"Text Changed!",
//         sampleBoolean: true
//       })
//     } else {
//       this.setState({
//         sampleText:"Hello World!",
//         sampleBoolean: false
//       })
//     }
//   }

//   render() { 
//     return ( // 'this' is javascript syntax pointing class 'App'
//       <View style={styles.background}>
//         <Text onPress={this.changeState}>
//           {this.state.sampleText}
//         </Text>
//       </View>
//     )
//   }
// }

// ex6) state is async : data copy -> update
class App extends Component {
  state = {
    sampleText: 'Hello world',
    sampleBoolean: true,
    sampleNum: 1
  } 

  onAdd = () => {
    this.setState({
      sampleNum: sampleNum + 1 // sampleNum would be copied and updated 
      //sampleNum: 100
    })
    // Expected: 
    // ReferenceError: Can't find variable: sampleNum
    // 1 -> 100
    // reference https://onlyfor-me-blog.tistory.com/463

    this.setState({
        sampleNum: prevState.sampleNum + 1
    })
  }

  render() { 
    return (
      <View style={styles.background}>
        <Text onPress={this.onAdd}>
          {this.state.sampleNum}
        </Text>
      </View>
    )
  }
}

// // ex7) state is async : data copy -> update
// class App extends Component {
//   state = {
//     sampleText: 'Hello world',
//     sampleBoolean: true,
//     sampleNum: 1
//   } 

//   onAdd = () => {
//     this.setState(prevState => {
//       return {
//         sampleNum: prevState.sampleNum + 1
//       }
//     })
//     // Expected: 
//     // Counter works
//   }

//   render() { 
//     return (
//       <View style={styles.background}>
//         <Text onPress={this.onAdd}>
//           {this.state.sampleNum}
//         </Text>
//       </View>
//     )
//   }
// }


// // ex8) ** props : way to transfer data to child component (./propsChild.js)
// class App extends Component {
//   state = {
//     sampleText: 'Hello world',
//     sampleBoolean: true // false
//   } // where state is initialized => use setState to change state

//   changeState = () => {
//     if (!this.state.sampleBoolean) {
//       this.setState({
//         sampleText:"Text Changed!",
//         sampleBoolean: true
//       })
//     } else {
//       this.setState({
//         sampleText:"Hello World!",
//         sampleBoolean: false
//       })
//     }
//   }
//   render() { 
//     return (
//       <View style={styles.background}>
//         <PropsChild sText={this.state.sampleText} cState={this.changeState}/>
//       </View>
//     ) // PropsChild Component got props(defined in parents component - sText, cState) from parents component
//   }
// }

export default App;