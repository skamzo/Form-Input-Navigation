import React, {useState} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
//import ImagePicker from "react-native-image-picker";
import * as ImagePicker from 'expo-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function textInputs({navigation}){


const[firstname, setFirsname] = useState();
const[lastname, setLastname] = useState();
const[cellphone, setCellphone] = useState();
const[image, setImage] = useState(null);


/*const  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // alert(response.customButton);
      } else {
        // let source = response;
        // You can also display the image using data:
         let source = 'data:image/jpeg;base64,' + response.data ;
        setImage(source);
      }
    });
  };*/

  const PickImage = async () => {
     let result = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.All,
       allowsEditing: true,
       aspect: [4,3],
       quality: 1
     })
     console.log(result)
     if(!result.cancelled) {
       setImage(result.uri)
     }
  }

const clickHandler = () => {
  setFirsname(firstname);
  setLastname(lastname);
  setCellphone(cellphone);
}

return (
  <View style={styles.container}>
    <TextInput multiline style={styles.input} 
    placeholder= 'Please Enter Firt Name'
    onChangeText={(val) => setFirsname(val)}/>

    <TextInput multiline style={styles.input} 
    placeholder= 'Please Enter Last Name'
    onChangeText={(val) => setLastname(val)}/>

    <TextInput multiline style={styles.input} keyboardType='numeric'
    placeholder= 'Please Enter Cell Number'
    onChangeText={(val) => setCellphone(val)}/>

    
    <View style={styles.choose}>
        <Button title='Select Your Image' onPress={PickImage} />
    </View>
    <View style={styles.buttnContainer}>
    <Button title='Add' onPress={() => {navigation.navigate('DisplayInputs',{
      firstname:firstname,
      lastname:lastname,
      cellphone:cellphone,
      image: image
      }
      )}} />
    </View>
    </View>
    
)

}
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#45A08C',
  alignItems: 'center',
  justifyContent: 'center',
},
buttnContainer:{
  marginTop: 20,
},
input: {
  borderWidth: 1,
  borderColor: '#FFFB34',
  padding: 4,
  margin: 5,
  width: 400,
},
choose: {
  backgroundColor: '#FF9700',
}

})