import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class MapScreen extends React.Component {
    
    render() {
        
        return (
           
           <View style={styles.container}>
                <Text>Esse é o mapa!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})