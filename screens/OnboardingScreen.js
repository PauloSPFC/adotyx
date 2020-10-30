import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { withOrientation } from 'react-navigation';

import { AppLoading } from 'expo';
import { useFonts, 
    Montserrat_100Thin,Montserrat_200ExtraLight,Montserrat_300Light,Montserrat_400Regular,Montserrat_500Medium,Montserrat_600SemiBold,Montserrat_700Bold,Montserrat_800ExtraBold,Montserrat_900Black,
  } from '@expo-google-fonts/montserrat';


const OnboardingScreen = ({ navigation }) => {

    const [fontsLoaded, error] = useFonts({
        SemiBold: Montserrat_600SemiBold,
        Bold: Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Onboarding
        pages={[
          {
            backgroundColor: '#5500FF',
            title: 
            <View style={styles.paragrafo}>
                <Text style={styles.titulo}>
                    adotyx<Text style={styles.ponto}>.</Text>
                </Text>
            </View>,
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paragrafo: {
        marginBottom: 0,
        alignItems: "center"
    },
    titulo: {
        color: "white",
        marginBottom: 90,
        fontFamily: "Bold",
        fontSize: 64
    },
    ponto: {
        color: "#00E6AD",
        fontFamily: "Bold",
        fontSize: 64,
    }
})