'use strict';
    import React from 'react';
    import {
      AppRegistry,
      StyleSheet,
      Text,
      View
    } from 'react-native';


//    class HelloWorld extends React.Component {
//      render() {
//        return (
//          <View style={styles.container}>
//            <Text style={styles.hello}>Hello, ABC</Text>
//             <Text style={styles.hello}>Hello, BBC</Text>
//          </View>
//        )
//      }
//    }
//    var styles = StyleSheet.create({
//      container: {
//        flex: 1,
//        justifyContent: 'center',
//      },
//      hello: {
//        fontSize: 20,
//        textAlign: 'center',
//        margin: 10,
//      },
//    });
//    AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);


    import mama from './myrn/mama';

    AppRegistry.registerComponent('MyReactNativeApp', () => mama);
