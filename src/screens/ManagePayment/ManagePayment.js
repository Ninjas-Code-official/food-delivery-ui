import React from 'react';
import {
    View, Text, Image, TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header/Header';
import { verticalScale } from '../../utils/scaling';
import Styles from './styles';
import AccordionList from '../../components/FormsAccordion/AccordionList';
import DebitCard from '../../components/ManagePaymentForm/DebitCard/DebitCard';
import Paypal from '../../components/ManagePaymentForm/Paypal/Paypal';
import Stripe from '../../components/ManagePaymentForm/Stripe/Stripe';
import { SafeAreaView } from 'react-navigation'

const formImages = {
    cardImage: require('../../assets/images/cards.png'),
    paypalImage: require('../../assets/images/paypal.png'),
    netbankImage: require('../../assets/images/stripe.png'),
};


const DATA = [
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


class ManagePayment extends React.Component {
    constructor() {
        super();
    }

    render_head(form) {
        return (
            <View style={Styles.header_container}>
                <Image resizeMode="cover" style={{ height: verticalScale(form.header_image_height), width: verticalScale(form.header_image_width) }} source={form.header_image} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={Styles.form_header__title}>{form.header_title}</Text>
                    <Text style={Styles.form_header__subscript}>
                        {form.header_subscript}
                    </Text>

                </View>
            </View>
        );
    }

    render_body(form) {
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
                    headingTitle="Payment Options"
                    navigationObj={this.props.navigation}
                />
                <View style={Styles.flex}>
                    <View style={[Styles.container]}>
                        <View style={[Styles.top_container]}>
                            <View style={[Styles.payment_text__container]}>
                                <Text style={Styles.payment_text}>
                                    How do you wish to pay?
                            </Text>
                            </View>
                            <View style={[Styles.payment_forms__container]}>
                                <AccordionList
                                    list={DATA}
                                    header={this.render_head}
                                    body={this.render_body}
                                />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={Styles.payButton}>
                        <Text style={Styles.payButton_Text}>
                            Set Default Card
                            </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default ManagePayment;
