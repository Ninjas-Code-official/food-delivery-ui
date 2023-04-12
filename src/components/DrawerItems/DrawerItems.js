import React from 'react';
import {
    Text, StyleSheet, TouchableOpacity, View, Image,
} from 'react-native';
import { fontStyles } from '../../utils/fontStyles';

const svgPath = {
    calendar: require('../../assets/images/sideDrawerItems/calendar.png'),
    notifications: require('../../assets/images/sideDrawerItems/bell.png'),
    reviews: require('../../assets/images/sideDrawerItems/reviews.png'),
    address: require('../../assets/images/sideDrawerItems/address.png'),
    payment: require('../../assets/images/sideDrawerItems/payment.png'),
    settings: require('../../assets/images/sideDrawerItems/settings.png'),
    help: require('../../assets/images/sideDrawerItems/help.png'),
    logout: require('../../assets/images/sideDrawerItems/logout.png'),
};

const drawerItems = props => (

    <View style={styles.Flex}>
        <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <View style={styles.leftContainer}>
            <Image
                    style={styles.img}
            source={svgPath[props.icon]}
            resizeMode="contain"
          />
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{props.title}</Text>
          </View>
      </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
    Flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    leftContainer: {
        height: '50%',
        width: '15%',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    rightContainer: {
        height: '80%',
        width: '75%',
        justifyContent: 'center',
    },
    title: {
        fontFamily: fontStyles.PoppinsRegular,
        color: 'black',
    },

});

export default drawerItems;
