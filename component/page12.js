import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView ,TextInput,Button} from 'react-native';

export default function App() {
  return (
    
   
      
<View style={styles.container}>
<View style={styles.date}>
<View style={styles.new}>
<Text style={styles.text} >Wednesday,March 22/03/2025</Text>
</View>
</View>


<View style={styles.input}>
<Text style={styles.text1}>Full Name:</Text>
<TextInput style={styles.inupts}/>
<Text style={styles.text1}>Email Address:</Text>
<TextInput style={styles.inupts}/>
</View>
<View style={styles.fingerPrint}>
<Text style={styles.text1}>SCAN YOUR FINGER HERE  </Text>
<Text style={styles.text1}>Upload your photo </Text>
</View>
<View style={styles.button}>
    <Button title='Register'/>
</View>
<View style={styles.button}>
  <Button title='cancel'/>
</View>

        </View>

  );
}

const styles = StyleSheet.create({
  container: {
 
    flex:1,


  },

  inupts:{
    
    margin: 15,
      height: 40,
      borderColor: '#116591',
      borderWidth: 1,
      width:260
    

},
  text1:{
color:'#116591',

  },
  new:{
    marginTop:10,
height:40,
width:250,
backgroundColor:'#116591',

borderRadius:20,
alignItems:'center',
justifyContent:'center'

  },
  date:{
    flex:2,
  
  height:40,
  paddingTop:10,
justifyContent:'center',
alignItems:'center',

  },
  input:{
 
  flex:3,
  justifyContent:'center',
alignItems:'center',
  },
  fingerPrint:{
    
    flex:4,
    justifyContent:'center',
alignItems:'center',
    },
  photo:{
      backgroundColor:'#116591',
      flex:5,
      justifyContent:'center',
alignItems:'center',
      },
      button:{
        
        flex:3,
        justifyContent:'center',
alignItems:'center',
        },
        text:{
          color:'white'
        }



  

});
