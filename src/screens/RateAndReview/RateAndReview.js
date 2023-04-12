import React from 'react';
import {
    View, Text, Image, TextInput, TouchableOpacity,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import HeaderBack from '../../components/Header/Header';
import styles from './styles';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../utils/scaling';
import { SafeAreaView } from 'react-navigation'
const CUSTOM_STAR = require('../../assets/icons/bigGapStar.png');

class RateAndReview extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <HeaderBack
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle="Rate and Review"
                    navigationObj={this.props.navigation}
                />
                <View style={styles.flex}>
                    <View style={styles.reviewTextContainer}>
                        <View style={styles.reviewTextSubContainer}>
                            <View style={styles.reviewTextContainerText}>
                                <Text style={styles.reviewStyle}>Write a Review</Text>
                            </View>
                            <View style={styles.reviewTextContainerImage}>
                                <View style={styles.reviewTextSubcontainerImage}>
                                    <Image
                                        source={require('../../assets/images/pencil.png')}
                                        resizeMode="contain"
                                        style={styles.imageResponsive}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <View style={styles.ratingSubContainer}>
                            <Rating
                                type="custom"
                                ratingImage={CUSTOM_STAR}
                                ratingColor={colors.primaryGreenColor}
                                imageSize={verticalScale(40)}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputSubContainer}>
                            <TextInput
                                style={styles.textinput}
                                placeholderTextColor={colors.fontGreyColor}
                                onChangeText={this.props.on_change_handler}
                                placeholder="More detailed reviews get more visibility..."
                            />
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.btnSubContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Menu')}
                                style={styles.btnTouch}
                            >
                                <Text style={styles.btnText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default RateAndReview;
