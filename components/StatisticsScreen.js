import React from 'react';
import { TextInput,Button, StyleSheet, Text, View } from 'react-native';
import SignButton from './SignButton';

import styles from './Styles'





class StatisticsScreen extends React.Component {

    constructor(){
      super();
      this.state = {
        'selected_month' : undefined
      }
    }

    render(){
        return(
            <View style={styles.container}>
                
                <SignButton type="in"/>
                <Text style={styles.br}/>
                <SignButton type="out"/>
            </View>
        )
    }
}


  
export default StatisticsScreen;