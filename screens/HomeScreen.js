import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

import LoginScreen from './LoginScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName })
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }   

        render() {
            return  (
                <View style = {styles.container}> 
                    <Text>Olá {this.state.displayName}! </Text>

                    <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                        <Text style={{ color: "#FFF", fontWeight: "900", fontSize: 16}}>Sair</Text>
                    </TouchableOpacity>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        marginTop:32,
        marginHorizontal: 30,
        backgroundColor: "#f05454",
        borderRadius: 2,
        height: 52,
        width:152,
        alignItems: "center",
        justifyContent: "center"
    }
});
