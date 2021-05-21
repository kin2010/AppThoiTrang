import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, Button,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
export default function History ({navigation,route}) {
    
    
        function click(){
                navigation.navigate({name:"Home",params:{haha:"kin_historyy"}})
        }
        
        return(
            <View>
                  <Text>hii  history</Text>
                  <Text>{route.params?.ten}</Text>
                  <TouchableOpacity onPress={()=>click()}>
                      <Text>kick me</Text>
                  </TouchableOpacity>
            </View>
        );
    
}
