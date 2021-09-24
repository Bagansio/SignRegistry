import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import StatisticsScreen from './components/StatisticsScreen';
import StyleSheet from 'react-native';

const Stack = createNativeStackNavigator();



class App extends React.PureComponent{

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#246EE9'
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Sign Registry'}}
          />
          <Stack.Screen
            name="Statistics"
            component={StatisticsScreen}
            options={{title: 'Statitistics'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;
