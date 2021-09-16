import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Card, Text,useColorScheme, View, Button, TextInput, Image} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

export default function DisplayInputs({route, navigation}) {
    const {firstname, lastname, cellphone, image} = route.params;
    { image && console.log(image); }
    return(
        <View style={styles.container}>
            <ScrollView>
            <Image style={styles.image} source={{uri:image}} />
            <View style={styles.card}>
            <Text style={styles.title}>First Name: {firstname}</Text>
            <Text></Text>
            <Text style={styles.title}>Last Name: {lastname}</Text>
            <Text></Text>
            <Text style={styles.title}>Cell Number: {cellphone}</Text>
            <Text></Text>
            </View>
            </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 6,
      padding:24,
      flex: 1,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        borderWidth: 1,
    },
    text:{
        padding:24,
        flex: 1,
        backgroundColor: '#F8C46B',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 9,
        marginVertical: 9,
        width:200,
        height:200,

        alignItems: 'center',

    },
    title:{
        fontSize: 15,
        color: '#FF0000',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15

    }
})