import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacityBase, TouchableOpacity,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Login">;

const Login = () => {

    const navigation = useNavigation<HomeProps>();

    function irParaTelaHome(){
        navigation.navigate('Home');
    }

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
         </View>
            
        <View>
            <TouchableOpacity style={styles.buttonContainer} onPress={irParaTelaHome}>
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