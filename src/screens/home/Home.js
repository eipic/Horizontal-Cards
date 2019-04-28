import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, Animated } from 'react-native';
import { CardComponent } from '../../components';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

class Home extends Component {
    scrollX = new Animated.Value(0);
    state = {
        feeds:[{}, {}, {}]
    }
    render() {
        let position = Animated.divide(this.scrollX, width);

        return (
            <View style={styles.container}>
                
                <ScrollView horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} pagingEnabled={true}
                    onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
                        [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
                    )}>
                    {
                        this.props.goals.map((goal, i) => {
                            return(
                                <CardComponent key={i} data={goal}/>
                            );
                        })
                    }
                </ScrollView>
                <View style={styles.dotsContainer}>
                    <View style={styles.dots}>
                        {
                            this.props.goals.map((indicator, i) => { // the _ just means we won't use that parameter
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                                outputRange: [0.4, 1, 0.4], // when position is not i, the opacity of the dot will animate to 0.3
                                extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
                              });
                            return (
                                <Animated.View key={i} style={[styles.dot,{opacity: opacity}]}></Animated.View>
                            );                            
                        })}
                    </View>
                </View>
                
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        goals: state.goals
    }
}

export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    }, 
    dotsContainer:{
        alignItems: 'center',
        justifyContent:'center',
        width: width,
        height: 20,
        top: 0, 
        position: 'absolute',
        marginTop: 20
    },

    dots:{
        width: 180,
        justifyContent:'space-around',
        flexDirection: 'row',
    },
    dot:{
        width: 6,
        height: 3,
        borderRadius: 200,
        backgroundColor: 'white',
        
    }
});