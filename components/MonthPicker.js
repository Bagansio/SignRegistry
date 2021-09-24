import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert,TextInput,Button, StyleSheet, Text, View,Pressable } from 'react-native';

import styles from './Styles'

import * as utils from './utils/data';
import {Picker} from '@react-native-picker/picker';




class MonthPicker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  pickerItems = () => {
    
  }

  render(){

    return(
        <Picker
            selectedValue={months[0]}
            onValueChange={(itemValue) =>
                this.setState({'selected_month' : itemValue

                })
            }>
            
            {}
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    )
}
}

export default MonthPicker