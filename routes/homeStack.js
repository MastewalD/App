import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../component/Home'
import About from '../component/About'
import New from '../component/New'
const screens={
    Home:{
        screen: Home
    },
    About:{
        screen: About
    },
    New:{
        screen: New
    }
}
const HomeStack = createStackNavigator(screens) 
export default createAppContainer(HomeStack)