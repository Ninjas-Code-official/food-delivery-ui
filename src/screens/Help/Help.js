import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import { SafeAreaView } from 'react-navigation'

class Help extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <Header
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle="Help"
                    navigationObj={this.props.navigation}
                />
                <View style={styles.flex}>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentSubContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>Email us at</Text>
                            </View>
                            <View style={styles.descContainer}>
                                <Text style={[styles.descText, styles.colorOrange]}>sharan.gohar@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentSubContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>Where do we find the food?</Text>
                            </View>
                            <View style={styles.descContainer}>
                                <Text style={[styles.descText, styles.colorBlack]}>You can find the food at your nearest store without paying anything to customer service.Our charges are extremely low as compared to others.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentSubContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>How do we contact?</Text>
                            </View>
                            <View style={styles.descContainer}>
                                <Text style={[styles.descText, styles.colorBlack]}>You can contact us through our email, phone number or our website</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentSubContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>How can I pay the delivery person?</Text>
                            </View>
                            <View style={styles.descContainer}>
                                <Text style={[styles.descText, styles.colorBlack]}>You can pay the delivery person in person or pay online as well throught credit or debit card</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentSubContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.titleText}>Is the service available in my city?</Text>
                            </View>
                            <View style={styles.descContainer}>
                                <Text style={[styles.descText, styles.colorBlack]}>Currently this service is available in cities Islamabad and Karachi you can contact us to avail this service in your city</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Help;
