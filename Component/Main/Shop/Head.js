import 'react-native-gesture-handler';
import React,{Component}from 'react';
import {View,Text,AppRegistry, Button,StyleSheet,Dimensions,TouchableOpacity,Image,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const{height}=Dimensions.get('window');

import icLogo from '../../images/appIcon/ic_logo.png';
import icMenu from '../../images/appIcon/ic_menu.png';
import search from '../../images/appIcon/search.png';
export default function Head  (){
    
    
    
    const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return(
            <View style={wrapper}>
            <View style={row1}>
                <TouchableOpacity >
                    <Image source={icMenu} style={iconStyle} />
                </TouchableOpacity>
                <Text style={titleStyle}>App Thời Trang</Text>
                <Image source={icLogo} style={iconStyle} />
            </View>
            <TextInput 
                style={textInput}
                placeholder="Search..."
                underlineColorAndroid="transparent"
               // value={this.state.txtSearch}
              //  onChangeText={text => this.setState({ txtSearch: text })}
               // onFocus={() => global.gotoSearch()} 
               // onSubmitEditing={this.onSearch.bind(this)}
            />
        </View>
        );
    
}
const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { 
        height: height / 23, 
        backgroundColor: '#FFF', 
        paddingLeft: 10,
        paddingVertical: 0 
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});
