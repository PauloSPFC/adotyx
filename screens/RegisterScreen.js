import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState ({ errorMessage: error.message }))
    }

    static navigationOptions = {
        header: null
    }

        render() {
            return  (
                <View style = {styles.container}> 
                    <Text style={styles.greeting}> 
                        {`Cadastre-se, é rapidinho!`} 
                    </Text>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && 
                        <Text style={styles.error}>
                            {this.state.errorMessage}
                        </Text>}
                    </View>
                
                    <View style = {styles.form}> 

                        <View>
                            <Text style = {styles.inputTitle}>
                                Nome completo
                            </Text>
                            <TextInput 
                                style={styles.input} 
                                autoCapitalize="none"
                                onChangeText={name=>this.setState({name})}
                                value={this.state.name}
                            ></TextInput>
                        </View>

                        <View style = {{ marginTop: 32 }}>
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

                    <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                        <Text style={{ color: "#FFF", fontWeight: "900", fontSize: 16}}>Registrar</Text>
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
