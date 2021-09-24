import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacityBase, TouchableOpacity,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';


const Login = () => {
    return(  
        <View style={styles.container}>
            <Text style={styles.title}>Facebook</Text>
            <View style={styles.IconContainer}>
                <Image
                style={styles.icon}
                source={require("../../assets/icon.png")
            } />

            </View>

        <View style={styles.formContainer}>

            <TextInput
            placeholder="email"
            style={styles.input}
            />
          </View>  
          
        <View style={styles.formContainer}>
            <TextInput
            placeholder="password"
            secureTextEntry
            style={styles.input}
            />

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            </View>

            <Text
                style={styles.link}
                >
                Sign Up for facebook </Text>

            </View>
    );
        }


export default Login