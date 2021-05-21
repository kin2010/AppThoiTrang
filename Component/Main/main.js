import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import History from '../History/history.js'
import Changeinfo from '../ChangeInfo/changeinfo.js'
import Shop from './Shop/shop.js'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const screenA=({navigation,route})=>{
    
    return(
        <View>
            
            <TouchableOpacity onPress={()=>this.click()}>
                <Text>To B</Text>
                
            </TouchableOpacity>
        </View>
    );
}

export default function Main (){
    
        return(

          <View style={{flex:1}}>  
                  
                        <Shop></Shop>
                
               
                        </View> 
                 
                    
            
        );
    
}