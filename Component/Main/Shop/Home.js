import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, Button,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../main.js';
import Authen from 'ThoiTrang/Component/Authentication/authentication.js';
import ChangeInfo from 'ThoiTrang/Component/ChangeInfo/changeinfo.js';
import History from 'ThoiTrang/Component/History/history.js';
const screenA=({navigation,route})=>{
    function click(){
        navigation.navigate({name:"History",params:{ten:"kin"}});
    }
    return(
        <View>
            
            <TouchableOpacity onPress={()=>click()}>
                <Text>To B</Text>
                <Text>{route.params?.haha}</Text>
            </TouchableOpacity>
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

const Drawer = createDrawerNavigator();
export default function Home  (){
    
    
    
        
        return(
            <Drawer.Navigator drawerContentOptions={{ activeTintColor: '#e91e63',
                        itemStyle: { marginVertical: 30 }}}>

                <Drawer.Screen name="Home" component={screenA} />
                <Drawer.Screen name="Authentication" component={Authen} />
                <Drawer.Screen name="Change Info" component={ChangeInfo} />
                <Drawer.Screen name="History" component={History} />
                
       
            </Drawer.Navigator>
        );
    
}
