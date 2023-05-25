import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';

export default function About({navigation}) {
    const [input,setInput]=useState(
        {
        fullName:'',
        email:'',
        password:'',
        fingerPrint:''
    },
    )
  const handlePress=()=>{
    navigation.navigate('Login')
  }
  const handleRegister=()=>{
  fetch('http://localhost:8000/register',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: '',
      email: email,
      password:password,
      fingerPrint:fingerPrint
    }),
  });



    }

  return (
   
    <SafeAreaView style={styles.container}>
    <View style={styles.box}>
    <Button title='login' onPress={handlePress}/>
      <View style={styles.wel}>
      <Text style={styles.text}>WELCOME BACK !</Text></View>
      
      </View>
      
    <View style={styles.input}>
        
      <Text style={styles.text1}>fullName</Text>
      <TextInput style={styles.inputs} onChangeText={(value)=>setInput(value)}/>
      <Text style={styles.text1}>Email</Text>
      <TextInput style={styles.inputs} onChangeText={(value)=>setInput(value)}/>
      <Text style={styles.text1}>password</Text>
      <TextInput style={styles.inputs} onChangeText={(value)=>setInput(value)}/>
      <Text style={styles.text1}>confirmPassword</Text>
      <TextInput style={styles.inputs} onChangeText={(value)=>setInput(value)}/>
      <Text style={styles.text1}>scann your finger print</Text>
      <View style={styles.finger}></View>
      
    </View>
    <View style={styles.button}>
      <Button title='register' onPress={()=>handleRegister()} />
      <Button title='cancel'/>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box:{
    flex:1,
    alignItems:'flex-end',
    
    justifyContent:'flex-end',
   
    
  },
  text:{
  
  backgroundColor:'blue',
  
  
  alignItems:'center',
  justifyContent:'center',
  color:'white',
  fontSize:15
  },
  input:{
flex:2,


  },
  inputs:{
   
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
text1:{
color:'blue',
marginLeft:10,

},

button:{
  
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around',

},

finger:{
backgroundColor:'lightseagreen',
justifyContent:'center',
height:40,
width:100,
}


});
