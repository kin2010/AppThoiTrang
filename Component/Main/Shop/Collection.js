import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../images/temp/banner.jpg';

const { width ,height} = Dimensions.get('window')
export default function Collection() {


    const { wrapper, textStyle, imageStyle } = styles;

    return (
        <View style={wrapper}>
            <View style={{flex:1, height: 50, justifyContent: 'center' }}>
                <Text style={textStyle} > COLLECTION</Text>
            </View>
            <TouchableOpacity style={{ flex: 4, justifyContent: 'flex-end' }} >
                <Image source={bannerImage} style={imageStyle} />
            </TouchableOpacity>
        </View>
    );

}

//933 x 465
const imageWidth = width - 70;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
      
        height:height*0.3,
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: 'column',
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    }
});
