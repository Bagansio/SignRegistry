import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { TextInput,Button, StyleSheet, Text, View,Pressable } from 'react-native';

import styles from './Styles'






class SignButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        type: "in",
        title: "IN"
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


  render(){
      return(
        <Pressable
            style={this.setStyle}>
            <Text style={styles.SignText}>{this.state.title}</Text>
        </Pressable>
      )
  }
}

export default SignButton