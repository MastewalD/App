import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';

export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
    <View style={styles.box}>
      <View style={styles.wel}>
      <Text style={styles.text}>Wednesday,March 22/03/2023</Text></View>

      </View>
      
    <View style={styles.input}>
      <Text style={styles.text1}>Team Name</Text>
      <TextInput style={styles.inputs}/>
      <Text style={styles.text1}>Role</Text>
      <TextInput style={styles.inputs}/>
    </View>
    <View style={styles.button}>
      <Button title='add'/>
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
    justifyContent:'center',
    alignItems:'center'
   
    
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
text1:{
color:'blue',
marginLeft:10,

},
inputs:{
  margin: 15,
  height: 40,
  borderColor: '#116591',
  borderWidth: 1,
  width:260
},
button:{
  flex:3,
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-around'

},
wel:{
backgroundColor:'blue',

justifyContent:'center',
alignItems:'center',
height:40,
width:200,
borderRadius:10
}



});
