import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert,TextInput,Button, StyleSheet, Text, View,Pressable } from 'react-native';

import styles from './Styles'

import * as utils from './utils/data';





class SignButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        type: "in",
        title: "IN",
    }
  }


  componentDidMount(){
    if(this.props.type == "out"){
        this.setState({
            type: "out",
            title: "OUT"
        })
    }
  }


  setStyle = ({pressed}) => [
    {
      backgroundColor: pressed
        ? '#0044bb' //standard Blue
        : '#246EE9' //dark blue
    },
    styles.SignButton
  ]


  onPress = async() => {
    let date = new Date();
    Alert.alert(
      "Alert Title",
      "YOOO",);
    if(this.state.type == 'in'){
       await utils.setRegistry();
       console.log(await AsyncStorage.getAllKeys())
    }
    else{
      
       console.log(await utils.loadRegistry());
    }  
  }
  render(){
      return(
        <Pressable
            style={this.setStyle}
            onPress={this.onPress}>
            <Text style={styles.SignText}>{this.state.title}</Text>
        </Pressable>
      )
  }
}

export default SignButton