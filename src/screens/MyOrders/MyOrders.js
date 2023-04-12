import React from 'react';
import { View, ScrollView } from 'react-native';
import Styles from './style';
import Header from '../../components/Header/Header';
import OrderitemCard from '../../components/OrderItem/OrderitemCard';
import { SafeAreaView } from 'react-navigation'

const orders = [
    {
        orderId: '0004512546',
        orderStatus: 1, // 1 for delivered, 0 for cancelled
        orderAmount: 33.62,
        orderDatetime: new Date(2019, 8, 3, 19, 1, 32),
        orderRating: 5,
    },
    {
        orderId: '0004512546',
        orderStatus: 0, // 1 for delivered, 0 for cancelled
        orderAmount: 33.62,
        orderDatetime: new Date(2019, 8, 3, 19, 1, 32),
        orderRating: 2,
    },
    {
        orderId: '0004512546',
        orderStatus: 1, // 1 for delivered, 0 for cancelled
        orderAmount: 33.62,
        orderDatetime: new Date(2019, 8, 3, 19, 1, 32),
        orderRating: 4,
    },
];

class MyOrders extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={Styles.flex}>
                <Header
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle="My Order"
                    navigationObj={this.props.navigation}
                />
                <View style={Styles.container}>
                    <ScrollView>
                        {
                            orders.map((order, ind) => (
                                <OrderitemCard
                                    key={ind}
                                    orderId={order.orderId}
                                    orderStatus={order.orderStatus}
                                    orderAmount={order.orderAmount}
                                    orderDatetime={order.orderDatetime}
                                    orderRating={order.orderRating}
                                />
                            ))}
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

export default MyOrders;
