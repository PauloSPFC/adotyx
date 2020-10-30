import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation, KeyboardAvoidingView } from "react-native";
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const {email, password} = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    }

        static navigationOptions = { headerShown: false }

        render() {
            LayoutAnimation.easeInEaseOut();

            return  (
                <View style = {styles.container}> 
                    
                    <StatusBar barStyle="light-content" backgroundColor="#5500FF"></StatusBar>

                    <Image 
                        source={require("../assets/img/adotyx.png")} 
                        style={{alignSelf: "center", marginTop:50, }} >
                    </Image>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && 
                        <Text style={styles.error}>
                            {this.state.errorMessage}
                        </Text>}
                    </View>
                
                    <View style = {styles.form}> 

                        <View>
                            <Text style = {styles.inputTitle}>
                                E-mail
                            </Text>
                            <TextInput 
                                style={styles.input} 
                                autoCapitalize="none"
                                onChangeText={email=>this.setState({email})}
                                value={this.state.email}
                            ></TextInput>
                        </View>

                        <View style = {{ marginTop: 32 }}>
                            <Text style = {styles.inputTitle}>Senha</Text>
                            <TextInput 
                                style={styles.input} 
                                secureTextEntry 
                                autoCapitalize="none"
                                onChangeText={password=>this.setState({password})}
                                value={this.state.password}                            
                            ></TextInput>
                        </View>
                        
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{ color: "#FFF", fontWeight: "900", fontSize: 16}}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {{ alignSelf: "center", marginTop: 32}}
                        onPress={() => 
                            this.props.navigation.navigate("Registro")}
                    >
                        <Text style = {{ color: "#414959", fontSize: 14}}>
                            Novo por aqui? <Text style = {{fontWeight: "500", color: "#5500FF"}}> Registre-se </Text>
                        </Text>
                    </TouchableOpacity>

                </View>
            )
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    form: {
        marginTop: -15,
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#848f9e",
        fontSize: 12,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#5500FF",
        borderRadius: 2,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    } 
});
