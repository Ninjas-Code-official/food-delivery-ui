import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
} from 'react-navigation';
// import createSwitchNavigator from "@react-navigation/compat"
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import LoginOrReg from '../screens/LoginOrReg/LoginOrReg';
import Tutorial from '../screens/Tutorial/Tutorial';
import AuthLoading from '../utils/authLoading';
import Menu from '../screens/Menu/Menu';
import SideBar from '../components/Sidebar/Sidebar';
import DeliveryLocation from '../screens/DeliveryLocation/DeliveryLocation';
import MenuItems from '../screens/MenuItems/MenuItems';
import ItemDetail from '../screens/ItemDetail/ItemDetail';
import Thankyou from '../screens/Thankyou/Thankyou';
import MyOrders from '../screens/MyOrders/MyOrders';
import Notifications from '../screens/Notifications/Notifications';
import Reviews from '../screens/Reviews/Reviews';
import Cart from '../screens/Cart/Cart';
import OrderDetail from '../screens/OrderDetail/OrderDetail';
import RateAndReview from '../screens/RateAndReview/RateAndReview';
import Payment from '../screens/Payment/Payment';
import ManagePayment from '../screens/ManagePayment/ManagePayment';
import Help from '../screens/Help/Help';

const authenticationNavigator = createStackNavigator(
    {
        Login,
        Register,
        LoginOrReg,
        Tutorial,
    }, {
        headerMode: 'none'
    })
const Drawer = createDrawerNavigator(
    {
        Menu: { screen: Menu }
    },
    {
        initialRouteName: 'Menu',
        contentComponent: SideBar
    }
)
const noDrawer = createStackNavigator({
    Drawer,
    MenuItems: { screen: MenuItems },
    Cart: { screen: Cart },
    OrderDetail: { screen: OrderDetail },
    RateAndReview: { screen: RateAndReview },
    Notifications: { screen: Notifications },
    MyOrders: { screen: MyOrders },
    Reviews: { screen: Reviews },
    ManagePayment: { screen: ManagePayment },
    Help: { screen: Help },
    Payment: { screen: Payment },
    DeliveryLocation,
    ItemDetail,
    Thankyou
},
    {
        headerMode: 'none'
    })
const AppNavigator = createSwitchNavigator(
    {
        AuthLoading,
        Auth: authenticationNavigator,
        noDrawer
    },
    {
        initialRouteName: 'AuthLoading'
    }
)
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer

// function Drawer() {
//     const Tabs = createDrawerNavigator();
//     return (
//         <Tabs.Navigator initialRouteName='Menu'>
//         <Tabs.Screen name='MenuItems' component={MenuItems} />
//         <Tabs.Screen name='Cart' component={Cart} />
//     </Tabs.Navigator >
//     )
// }
// function AppContainer() {
    

//     const MainStack = createStackNavigator()
//     //const { isLoggedIn } = useContext(UserContext)
//     return (
        
//         <NavigationContainer>
//             <MainStack.Navigator initialRouteName='Drawer' headerMode='screen' >
//                 <MainStack.Screen name='Drawer' component={Drawer} options={{ headerShown: false }} />
//             </MainStack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default AppContainer;