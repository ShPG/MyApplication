import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';


export default class App extends Component<{}> {
    render() {
        return (
             <View style={{flex:1}}>

                <Text style={{height:40}}>简单的网页显示</Text>
                <Text style={{height:40}}>简单的网页显示2</Text>


                <WebView
                        style={{height:100}}
                        scrollEnabled={false}
                        javaScriptEnabled={true}
                        source={{uri: 'http://www.lcode.org'}}
                      ></WebView>


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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});