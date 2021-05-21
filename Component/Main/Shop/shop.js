import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Tab = createBottomTabNavigator();
import Home from './Home.js';
import Contact from './Contact.js';
import Search from './Search.js';
import Cart from './Cart.js';
const Drawer = createDrawerNavigator();
function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
export default function Shop() {
    
    
 
        
        return (
                
              
              <View style={{flex:1}}>
                 
              <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}></Tab.Screen>
                <Tab.Screen name="Contact" component={Contact}></Tab.Screen>
               
                <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
                <Tab.Screen name="Search" component={Search}></Tab.Screen>
              
              </Tab.Navigator>
              </View>
          );
    
}
