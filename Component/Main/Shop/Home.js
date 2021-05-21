import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, Button,TouchableOpacity,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../main.js';
import Authen from 'ThoiTrang/Component/Authentication/authentication.js';
import ChangeInfo from 'ThoiTrang/Component/ChangeInfo/changeinfo.js';
import History from 'ThoiTrang/Component/History/history.js';
import Contact from './Contact.js';
import Search from './Search.js';
import Cart from './Cart.js';
import ScreenHome from './ScreenHome.js';
import Head from './Head.js';
const Tab = createBottomTabNavigator();
const screenA=({navigation,route})=>{
    function click(){
        navigation.navigate({name:"History",params:{ten:"kin"}});
    }
    return(
        <View>
            <Text>Home</Text>
            
        </View>
    );
    
}
const screenB=({navigation,route})=>{
    
    return(
        <View>
            
            <TouchableOpacity onPress={()=>this.click()}>
                <Text>To A</Text>
                
            </TouchableOpacity>
        </View>
    );
}
const {height}=Dimensions.get('window');
const Drawer = createDrawerNavigator();
export default function Home  (){
    
    
    
        
        return(
            <View style={{flex: 1}}>
                <View style={{height:height/8,backgroundColor:'green'}}> 
                    <Head></Head>
                </View>
                <Tab.Navigator>
                  <Tab.Screen name="Home" component={ScreenHome}></Tab.Screen>
                  <Tab.Screen name="Contact" component={Contact}></Tab.Screen>
                
                  <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
                  <Tab.Screen name="Search" component={Search}></Tab.Screen>
                
                </Tab.Navigator>
               
            </View>

        );
    
}
