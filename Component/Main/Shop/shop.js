import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, Button,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Authen from 'ThoiTrang/Component/Authentication/authentication.js';
import ChangeInfo from 'ThoiTrang/Component/ChangeInfo/changeinfo.js';
import History from 'ThoiTrang/Component/History/history.js';
const Tab = createBottomTabNavigator();
import Home from './Home.js';
import Contact from './Contact.js';
import Search from './Search.js';
import Cart from './Cart.js';
const Drawer = createDrawerNavigator();
const{height}=Dimensions.get('window');
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
                  <Drawer.Navigator drawerContentOptions={{ activeTintColor: '#e91e63',
                            itemStyle: { marginVertical: 30 }}}>

                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Authentication" component={Authen} />
                    <Drawer.Screen name="Change Info" component={ChangeInfo} />
                    <Drawer.Screen name="History" component={History} />
                    
        
                </Drawer.Navigator>

              </View>
          );
    
}
