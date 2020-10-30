import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class ProfileScreen extends React.Component {
    
    render() {
        
        return (
           
           <View style={styles.container}>
                <Text>Esse é o chat!</Text>
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