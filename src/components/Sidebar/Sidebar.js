import React, { Component } from 'react';
import { View } from 'react-native';
import SideDrawerItems from '../DrawerItems/DrawerItems';
import SideDrawerProfile from '../DrawerItems/DrawerProfile';
import styles from './styles';

const datas = [
    {
        title: 'My Orders',
        icon: 'calendar',
        navigateTo: 'MyOrders',
    },
    {
        title: 'Notifications',
        icon: 'notifications',
        navigateTo: 'Notifications',
    },
    {
        title: 'Reviews',
        icon: 'reviews',
        navigateTo: 'Reviews',
    },
    {
        title: 'Manage Payment Options',
        icon: 'payment',
        navigateTo: 'ManagePayment',
    },
    {
        title: 'Help',
        icon: 'help',
        navigateTo: 'Help',
    },
    {
        title: 'Logout',
        icon: 'logout',
        navigateTo: 'LoginOrReg',
    },
];


class SidebBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.Flex}>
                <View style={styles.topContainer}>
                <SideDrawerProfile />
              </View>
            <View style={styles.botContainer}>
                    {
                        datas.map((data, ind) => (
                            <View
                            key={ind}
                            style={styles.item}
                          >
                            <SideDrawerItems
                                  onPress={() => this.props.navigation.navigate(data.navigateTo)}
                                  icon={data.icon}
                                  title={data.title}
                                />
                          </View>
                        ))
                    }
                </View>
          </View>
        );
    }
}

export default SidebBar;
