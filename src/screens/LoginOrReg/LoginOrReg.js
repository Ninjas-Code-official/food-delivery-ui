import React from 'react'
import { View, Image } from 'react-native'
import FdParagraph from '../../ui/FdText/FdParagraph';
import FdBSOrange from '../../ui/FdButton/FdSmall/FdBSOrange'
import FdBSWhite from '../../ui/FdButton/FdSmall/FdBSWhite'
import styles from './styles'
import { SafeAreaView } from 'react-navigation'

class LoginOrReg extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={[styles.flex]}>
                <View style={[styles.flex]}>
                    <View style={styles.mainContainer}>
                        <View style={styles.topContainer}>
                            <View style={styles.mgTop10}>
                                <View style={styles.imgContainerTop}>
                                    <Image
                                        style={styles.imgResponsive}
                                        source={require('../../assets/images/logo.png')}
                                        resizeMode="contain" />
                                </View>
                                <View style={styles.paraContainer}>
                                    <FdParagraph>
                                        Welcome to Enatega, sometimes all you need is love. But a little food now and then doesn't hurt.
                                    </FdParagraph>
                                </View>
                                <View style={styles.btnContainer}>
                                    <FdBSOrange
                                        onPress={() => this.props.navigation.navigate('Login')}>
                                        Login
                                    </FdBSOrange>
                                    <FdBSWhite
                                        onPress={() => this.props.navigation.navigate('Register')}>
                                        Register
                                    </FdBSWhite>
                                </View>
                            </View>
                        </View>
                        <View style={styles.imgBotContainer}>
                            <Image
                                style={styles.imgResponsive}
                                source={require("../../assets/images/login_reg_food.jpg")}
                                resizeMode="cover" />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default LoginOrReg;