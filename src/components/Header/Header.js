import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image,StatusBar, Platform
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const svg_urls = {
    menu: require('../../assets/images/menu-button.png'),
    leftArrow: require('../../assets/images/leftarrow.png'),
    cart: require('../../assets/images/shopping-bag.png'),
};
class Header extends React.Component {
    renderLeftIcon = () => {
        let LeftEl = null;
        if (this.props.svgNameL == 'menu') {
            LeftEl = (
                <TouchableOpacity
                    onPress={() => this.props.navigationObj.dispatch(DrawerActions.toggleDrawer())}
                >
                    <Image
                        source={svg_urls[this.props.svgNameL]}
                        style={{ width: verticalScale(20), height: verticalScale(20) }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            );
        } else if (this.props.svgNameL == 'leftArrow') {
            LeftEl = (
                <TouchableOpacity
                    onPress={() => this.props.navigationObj.goBack()}
                >
                    <Image
                        source={svg_urls[this.props.svgNameL]}
                        style={{ width: verticalScale(20), height: verticalScale(20) }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            );
        }
        return LeftEl;
    }

    render() {
        return (
            <React.Fragment>
                <View style={styles.mainContainer}>
                    <View style={styles.subContainer}>
                        {this.renderLeftIcon()}
                        <Text style={styles.headingTitle}>{this.props.headingTitle}</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigationObj.navigate('Cart')}
                            style={styles.relativeContainer}
                        >
                            <Image
                                source={svg_urls[this.props.svgNameR]}
                                style={{ width: verticalScale(20), height: verticalScale(20) }}
                                resizeMode="contain"
                            />
                            <View style={styles.absoluteContainer}>
                                <Text style={styles.textAbsoluteContainer}>0</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}></View>
            </React.Fragment>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: height*.1,
        backgroundColor: 'white',
        marginTop: Platform.OS === 'ios' ? 0 : -(StatusBar.currentHeight)
    },
    subContainer: {
        alignSelf: 'center',
        width: '95%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: colors.lightGrayColor
    },
    headingTitle: {
        fontSize: verticalScale(20),
        fontFamily: fontStyles.PoppinsRegular,
        color: 'black'
    },
    relativeContainer: {
        position: 'relative'
    },
    absoluteContainer: {
        width: verticalScale(10),
        height: verticalScale(10),
        backgroundColor: colors.greenColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(7),
        position: 'absolute',
        right: 0,
        top: 3
    },
    textAbsoluteContainer: {
        color: 'white',
        fontSize: verticalScale(6),
        fontFamily: fontStyles.PoppinsRegular
    }

})

export default Header;
