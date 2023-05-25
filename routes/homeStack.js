import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../component/Home'
import Login from '../component/Login'
import New from '../component/New'
import Register from '../component/Register'
const screens={
    Register:{
        screen: Register
    },
    Home:{
        screen: Home
    },
  
    Login:{
        screen: Login
    },
   
    New:{
        screen: New
    }
}
const HomeStack = createStackNavigator(screens) 
export default createAppContainer(HomeStack)