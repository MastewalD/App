import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native';

export default function Home({navigation}) {
  const handlePress=()=>{
    navigation.navigate('About')
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}>
        WELCOME TO {'\n'}   EMPLOYEE ATTENDANCE  {'\n'}     SYSTEM
        </Text>
  <Button title='go to about' onPress={handlePress}/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#116591'
  },
  text:{
    
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    
    
  }
});
