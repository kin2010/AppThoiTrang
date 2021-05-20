import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Component/Main/main.js'
const Stack = createStackNavigator();
class ThoiTrang extends React.Component {
    render(){
        return(
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Main} />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}
AppRegistry.registerComponent("ThoiTrang",()=>ThoiTrang)