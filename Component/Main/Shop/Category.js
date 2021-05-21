import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import bannerImage from '../../images/temp/banner.jpg';
import Swiper from 'react-native-swiper';
import little from '../../images/temp/little.jpg';
import maxi from '../../images/temp/maxi.jpg';
import party from '../../images/temp/party.jpg';
const { width, height } = Dimensions.get('window');
export default function Collection() {


    const { wrapper, textStyle, imageStyle } = styles;

    return (
        <View style={wrapper}>
            <View style={{ flex: 1, height: 50, justifyContent: 'center' }}>
                <Text style={textStyle} > COLLECTION</Text>
            </View>
            <View style={{ flex: 4 }}>
                <Swiper width={imageWidth} height={imageHeight}>
                    <ImageBackground source={little} style={imageStyle}>
                        <View>
                            <Text style={{ fontSize: 20, color: "#AFAEAF" }}>One</Text>
                        </View>

                    </ImageBackground>
                    <ImageBackground source={maxi} style={imageStyle}>
                        <View>
                            <Text style={{ fontSize: 20, color: "#AFAEAF" }}>Two</Text>
                        </View>

                    </ImageBackground>
                    <ImageBackground source={party} style={imageStyle}>
                        <View>
                            <Text style={{ fontSize: 20, color: "#AFAEAF" }}>Three</Text>
                        </View>

                    </ImageBackground>
                </Swiper>
            </View>
        </View>
    );

}

//933 x 465
const imageWidth = width - 40;
const imageHeight = imageWidth / 2

const styles = StyleSheet.create({
    wrapper: {

        height: height * 0.3,
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
        width: imageWidth,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
