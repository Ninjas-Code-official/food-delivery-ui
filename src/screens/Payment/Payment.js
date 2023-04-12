import React from 'react';
import {
    View, Text, Image, TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header/Header';
import { verticalScale } from '../../utils/scaling';
import Styles from './styles';
import AccordionList from '../../components/FormsAccordion/AccordionList';
import DebitCard from '../../components/PaymentForm/DebitCard/DebitCard';
import Paypal from '../../components/PaymentForm/Paypal/Paypal';
import NetBanking from '../../components/PaymentForm/NetBanking/NetBanking';
import { SafeAreaView } from 'react-navigation'

const formImages = {
    cardImage: require('../../assets/images/cards.png'),
    paypalImage: require('../../assets/images/paypal.png'),
    netbankImage: require('../../assets/images/netBanking.jpg'),
};

const FORMS = [
    {
        header_title: 'Credit Card/ Debit Card',
        header_image: formImages.cardImage,
        header_image_width: 100,
        header_image_height: 25,
        header_subscript: '  Pellentesque viverra',
        body: (
            <DebitCard />
        ),
    },
    {
        header_image: formImages.paypalImage,
        header_image_width: 60,
        header_image_height: 20,
        header_subscript: '  Pellentesque viverra quis ipsum sed',
        header_title: 'Paypal',
        body: (
            <Paypal />
        ),
    },
];

class Payment extends React.Component {
    constructor() {
        super();
    }

    render_form_head(form) {
        return (
            <View style={Styles.header_container}>
                <Image
                    resizeMode="cover"
                    style={{ height: verticalScale(form.header_image_height), width: verticalScale(form.header_image_width) }} source={form.header_image}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={Styles.form_header__title}>
                        {form.header_title}
                    </Text>
                    <Text style={Styles.form_header__subscript}>
                        {form.header_subscript}
                    </Text>

                </View>
            </View>
        );
    }

    render_form_body(form) {
        return (
            <View style={Styles.form_body}>
                {form.body}
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={Styles.flex}>
                <Header
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle="Payment"
                    navigationObj={this.props.navigation}
                />
                <View style={[Styles.flex]}>
                    <View style={[Styles.container]}>
                        <View style={[Styles.top_container]}>
                            <View style={[Styles.payment_text__container]}>
                                <Text style={Styles.payment_text}>
                                    How do you wish to pay?
                            </Text>
                            </View>
                            <View style={[Styles.payment_forms__container]}>
                                <AccordionList
                                    list={FORMS}
                                    header={this.render_form_head}
                                    body={this.render_form_body}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Thankyou')}
                        style={Styles.payButton}
                    >
                        <Text style={Styles.payButton_Text}>
                            Pay $65
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default Payment;
