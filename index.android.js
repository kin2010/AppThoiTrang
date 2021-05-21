import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import history from './Component/History/history.js'
import Main from './Component/Main/main.js'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
import Shop from './Component/Main/Shop/shop.js';
class ThoiTrang extends React.Component {
    render(){
        return(
           
              
          <NavigationContainer>
               <Main></Main>
          </NavigationContainer>
          
        );
    }
}
AppRegistry.registerComponent("ThoiTrang",()=>ThoiTrang)