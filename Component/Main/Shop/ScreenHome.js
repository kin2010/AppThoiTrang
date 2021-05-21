import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Collection from './Collection.js';
import Category from './Category.js';
export default function ScreenHome  (){
    
    
    
        
        return(
            <View style={{flex:1,backgroundColor:'#DBDBD8'}}>
                  <Collection></Collection>
                  <Category></Category>
            </View>
        );
    
}
