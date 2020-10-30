import React from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { AppLoading } from 'expo';
import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth")
        })
    }

    render() {
        
            return  (
                <View style = {styles.container}> 
                    <Text style = {styles.titulo}>adotyx.</Text>
                    <ActivityIndicator size="large" color="white" />
                </View>
            )
        }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5500FF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        
        fontSize: 20,
        color: "#ffffff"
    }
});
