import React from 'react';
import {
    Text, StyleSheet, View, Image,
} from 'react-native';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../utils/scaling';

const drawerProfile = () => (

    <View style={styles.container}>
    <View style={styles.leftContainer}>
            <Image
        style={styles.img}
        source={require('../../assets/images/placeholder.png')}
      />
      </View>
        <View style={styles.rightContainer}>
            <Text style={styles.title}>Jane Doe</Text>
            <Text style={styles.description}>Janedoe1985@123.com</Text>
      </View>
  </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.lightGrayColor,
    },
    leftContainer: {
        width: '30%',
        height: '70%',
        marginRight: verticalScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: verticalScale(70),
        height: verticalScale(70),
        borderRadius: verticalScale(35),
        borderWidth: verticalScale(1),
        borderColor: colors.lightGrayColor,
    },
    rightContainer: {
        width: '60%',
        height: '30%',
    },
    title: {
        fontFamily: fontStyles.PoppinsRegular,
        color: 'black',
        fontSize: verticalScale(18),
    },
    description: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        color: colors.orangeColor,
    },
});

export default drawerProfile;
