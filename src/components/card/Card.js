import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

export default class Card extends Component {
    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.props.data.color}]}>
                <Animatable.View animation={'zoomIn'} style={styles.topContainer}>
                    <Image style={styles.img} source={this.props.data.icon}/>
                </Animatable.View>
                <Animatable.View animation={'slideInLeft'} style={styles.bottomContainer}>
                    <Text style={styles.title}>{this.props.data.name}</Text>
                    <Text>{this.props.data.summary}</Text>
                   
                    <View style={{flex:1, alignItems:'flex-start', justifyContent:'flex-end'}}>
                        <View style={styles.numberContainer}>
                            <Text style={[styles.number]}>{this.props.data.id}</Text>
                        </View>
                    </View>
                </Animatable.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width,
    },
    topContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },

    img:{
        width: 260,
        height: 260
    },

    bottomContainer:{
        height: height/3,
        width: width - 40,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6,
        marginBottom: 40,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        padding: 16,
    },
    numberContainer:{
        width: 40,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 200,
        marginBottom: -36,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        justifyContent:'center'

    },
    number:{
        fontWeight: 'bold',
        fontSize: 22,
        color: '#000000BB'
    },

    title:{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#000000BB',
        marginBottom: 20
    }
});