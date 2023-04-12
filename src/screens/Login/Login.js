import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import FdIconTextInput from '../../ui/FdIconTextInput/FdIconTextInput';
import FdFulllogo from '../../ui/FdFullLogo/FdFullLogo';
import FdOrangeTextLink from '../../ui/FdOrangeTextLink/FdOrangeTextLink';
import FdFullRoundedOrange from '../../ui/FdButton/FdFullRounded/FdFullRoundedOrange';
import FdHorizontalTextSplit from '../../ui/FdHorizantalTextSplit/FdHorizontalTextSplit';
import FdFacebookButton from '../../ui/FdSocialButton/FdFacebookButton';
import FdGoogleButton from '../../ui/FdSocialButton/FdGoogleButton';
import HeaderBackArrow from '../../components/Header/HeaderBackArrow';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'
 
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            emailpass_field: '',
            password_field: '',
        };
    }

    onBackClick = () => {
        this.props.navigation.navigate('LoginOrReg');
    }

    handleEmailphoneChange = (text) => {
        this.setState({ emailpass_field: text });
    }

    handlePasswordChange = (text) => {
        this.setState({ password_field: text });
    }


    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <HeaderBackArrow on_press={this.onBackClick} />
                <View style={styles.flex}>
                    <View style={[styles.container]}>
                        <View style={styles.backArrowContainer}>
                        </View>

                        <View style={[styles.login_body_container]}>
                            <FdFulllogo />
                            <View style={styles.marginTop20}>
                                <View style={styles.inputContainer}>
                                    <FdIconTextInput
                                        svgName="emailphone"
                                        on_change_handler={this.handleEmailphoneChange}
                                        placeholder="Email / Phone"
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <FdIconTextInput
                                        svgName="key"
                                        isPassword="True"
                                        height={verticalScale(24)}
                                        width={verticalScale(25)}
                                        marginRight={verticalScale(8)}
                                        on_change_handler={this.handlePasswordChange}
                                        placeholder="Password"
                                    />
                                </View>
                            </View>
                            <View style={[styles.lower_form, styles.marginBtm30]}>
                                <FdFullRoundedOrange onPress={() => this.props.navigation.navigate('DeliveryLocation')}>
                                    Login
                        </FdFullRoundedOrange>
                                <TouchableOpacity style={styles.marginTop20}>
                                    <FdOrangeTextLink text="Forgot Password" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.loginWithContainer}>
                                <FdHorizontalTextSplit linesWidthPercentage="28">
                                    Or Login With
                        </FdHorizontalTextSplit>
                            </View>
                            <View style={styles.social_btns_container}>
                                <FdFacebookButton onPress={() => this.props.navigation.navigate('DeliveryLocation')} />
                                <FdGoogleButton onPress={() => this.props.navigation.navigate('DeliveryLocation')} />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Login;
