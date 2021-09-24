import React from 'react';
import { TextInput,Button, StyleSheet, Text, View } from 'react-native';
import SignButton from './SignButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
                <Button
                    title="Go -->"
                    onPress={() => this.props.navigation.navigate('Statistics')}
                />

            </View>
        )
    }
}


  
export default HomeScreen;