import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { TextInput,Button, StyleSheet, Text, View } from 'react-native';







class SignButton extends React.Component {

  constructor(){
    super();
    this.state = {
      textValue: 'Lol',
      text: 'Placeholder Text',
    }
    this.getData();
    this.storeData();
    this.onPressButton= this.onPressButton.bind(this);
  }

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', this.state.text)
    } catch (e) {
      // saving error
    }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
        this.setState({ textValue: value})
      }
      else return "ERROR";
    } catch(e) {
      // error reading value
      
    }
  }


  onPressButton = e => {
    let text = "TEST";
    text = getData();
    this.setState({
      textValue: text
  })
  }

  render(){
    return (
      <View>
        <TextInput
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
        />
        <Text style={{color: 'red',fontSize:20}}> {this.state.textValue} </Text>
        <Button onPress={this.storeData} title="SEND"/>
        <Button onPress={this.getData} title="RECIEVE"/>
      </View>
      )
  }
}


export default SignButton;