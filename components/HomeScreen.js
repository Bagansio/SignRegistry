import React from 'react';
import { TextInput,Button, StyleSheet, Text, View } from 'react-native';
import SignButton from './SignButton';

import styles from './Styles'

class HomeScreen extends React.Component {

    constructor(){
      super();
      this.state = {

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


  
export default HomeScreen;