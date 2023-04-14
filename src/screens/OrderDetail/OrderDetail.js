import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Header from '../../components/Header/Header';
import styles from './styles';
import { colors } from '../../utils/colors';
import { SafeAreaView } from 'react-navigation'

const data = [
    { time: '09:00', title: 'Order Received', description: '13:32, Nov 05,2019' },
    { time: '10:45', title: 'Food is being prepared', description: '13:40, Nov 05,2019' },
    { time: '12:00', title: 'Out for Delivery', description: '13:55, Nov 05,2019' },
    { time: '14:00', title: 'Delivered', description: '14:15, Nov 05,2019' },
];

class OrderDetail extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <Header
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle="Order Detail"
                    navigationObj={this.props.navigation}
                />
                <View style={styles.flex}>
                    <View style={styles.orderContainer}>
                        <View style={styles.orderSubContainer}>
                            <View style={styles.orderSubContainerTitle}>
                                <Text style={styles.orderSubContainerTitleText}>Order Id - 0004512546</Text>
                            </View>
                            <View style={styles.orderSubContainerDes}>
                                <Text style={styles.orderSubContainerDesText}>13:32, Nov 05,2018</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.updatedFoodItemContainer}>
                        <View style={styles.foodItemsSubContainer}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.smallText}>Food item -</Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.smallText}>Veg. Sweet Corn Soup, Chiken Seekh Roll, Veg. Garlic Fried Rice</Text>
                            </View>
                            <View style={[styles.rightContainer]}>
                                <Text style={styles.priceText}>$50</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.foodItemsContainer}>
                        <View style={styles.foodItemsSubContainer}>
                            <View style={styles.leftContainer}>
                                <Text style={styles.smallText}>Delivered to -</Text>
                            </View>
                            <View style={styles.middleContainer}>
                                <Text style={styles.smallText}>Micheal M Stephens 295 Elk Street, Irvine California - 92614 949-690-8889 5zahas9aihow@throubay.com</Text>
                            </View>
                            <View style={[styles.rightContainer]} />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.timelineContainer}>
                        <View style={styles.timelineSubContainer}>
                            <Timeline
                                data={data}
                                circleSize={15}
                                circleColor={colors.primaryOrangeColor}
                                lineColor={colors.primaryOrangeColor}
                                showTime={false}
                                titleStyle={{ marginTop: -14 }}
                            />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.ratingContainer}>
                        <View style={styles.ratingSubContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('RateAndReview')}
                                style={styles.starsReviewContainer}
                            >
                                <Text style={styles.starsReviewContainerText}>Write a Review</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default OrderDetail;
