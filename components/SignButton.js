import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert,TextInput,Button, StyleSheet, Text, View,Pressable } from 'react-native';

import styles from './Styles'

import * as utils from './utils/data';





class SignButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        type: undefined,
        title: undefined,
    }
  }


  componentDidMount(){
    this.setState({
      type: this.props.type,
      title: this.props.type.toUpperCase()
  })
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
    let signed = await utils.signRegistry(this.state.type,false);
    if(! signed){
      Alert.alert(
        "You already signed it",
        "Do you want to overwrite it?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: await utils.signRegistry(this.state.type,true)
          }
        ],
        "secure-text"
      );
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