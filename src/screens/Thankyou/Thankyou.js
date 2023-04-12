import React from 'react';
import { View, Text, Image } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import HeaderBackArrow from '../../components/Header/HeaderBackArrow';
import FdFullRoundedOrange from '../../ui/FdButton/FdFullRounded/FdFullRoundedOrange';
import FdFullRoundedBlack from '../../ui/FdButton/FdFullRounded/FdFullRoundedBlack';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'

class Thankyou extends React.Component {
    onBackClick = () => {
        this.props.navigation.navigate('Payment');
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <HeaderBackArrow
                    on_press={this.onBackClick}
                />
                <View style={styles.container}>
                    <View style={styles.top_container}>
                        <Image
                            style={{ height: verticalScale(64), width: verticalScale(64) }}
                            source={require('../../assets/icons/verfiedmark64.png')}
                        />
                        <Text style={styles.thank_text}>
                            Thank You!
                    </Text>
                        <Text style={styles.order_confirmed_text}>
                            Your Order is confirmed
                    </Text>
                    </View>
                    <View style={styles.middle_container}>
                        <View style={styles.singleline_card}>
                            <Text style={styles.card_left_text}>Your Order Id</Text>
                            <Text style={styles.card_right_text}>000512345</Text>
                        </View>
                        <View style={styles.singleline_card}>
                            <Text style={styles.card_left_text}>Your Order Amount</Text>
                            <Text style={styles.card_right_text}>$ 30.50</Text>
                        </View>
                        <View style={styles.mulitline_card}>
                            <Text style={styles.card_left_text}>Order Detail</Text>
                            <Text style={styles.order_detail}>
                                Veg. Sweet Corn Soup, Chicken Seekh Roll, Veg. Garlic Fried Rice
                                eg. Sweet Corn Soup, Chicken Seekh Roll
                      </Text>
                        </View>
                        <View style={styles.singleline_card}>
                            <Text style={styles.card_left_text}>Payment Method</Text>
                            <Text style={styles.card_right_text}>
                                xxxx-xxxx-5246
                      </Text>
                        </View>
                    </View>
                    <View style={styles.bottom_container}>
                        <FdFullRoundedOrange onPress={() => this.props.navigation.navigate('OrderDetail')}>
                            Track Order
                    </FdFullRoundedOrange>

                        <View style={styles.back_container_blackbtn}>
                            <FdFullRoundedBlack onPress={() => this.props.navigation.navigate('Menu')}>
                                Back To Menu
                        </FdFullRoundedBlack>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Thankyou;
