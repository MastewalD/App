import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native';
import Navigate from './routes/homeStack'
export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
     <Navigate/>
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
