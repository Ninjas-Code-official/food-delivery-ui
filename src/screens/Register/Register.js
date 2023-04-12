import React from 'react';
import { View } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import FdIconTextInput from '../../ui/FdIconTextInput/FdIconTextInput';
import FdFulllogo from '../../ui/FdFullLogo/FdFullLogo';
import FdFullRoundedOrange from '../../ui/FdButton/FdFullRounded/FdFullRoundedOrange';
import FdHorizontalTextSplit from '../../ui/FdHorizantalTextSplit/FdHorizontalTextSplit';
import FdFacebookButton from '../../ui/FdSocialButton/FdFacebookButton';
import FdGoogleButton from '../../ui/FdSocialButton/FdGoogleButton';
import HeaderBackArrow from '../../components/Header/HeaderBackArrow';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email_field: '',
            phone_field: '',
            password_field: '',
        };
    }

    onBackClick = () => {
        this.props.navigation.navigate('LoginOrReg');
    }

    handleEmailChange = (text) => {
        this.setState({ email_field: text });
    }

    handlePasswordChange = (text) => {
        this.setState({ password_field: text });
    }

    handlePhoneChange = (text) => {
        this.setState({ phone_field: text });
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <HeaderBackArrow on_press={this.onBackClick} />
                <View style={styles.flex}>
                    <View style={[styles.container]}>
                        <View style={[styles.login_body_container]}>
                            <FdFulllogo />
                            <View style={styles.form_container}>
                                <View style={styles.input_container}>
                                    <FdIconTextInput
                                        error={this.state.phoneError}
                                        svgName="phone" marginRight={verticalScale(0)}
                                        on_change_handler={this.handlePhoneChange}
                                        placeholder=" Phone" />
                                </View >
                                <View style={styles.input_container}>
                                    <FdIconTextInput
                                        error={this.state.emailError}
                                        svgName="email" height={verticalScale(26)} width={verticalScale(26)} marginRight={verticalScale(10)}
                                        on_change_handler={this.handleEmailChange}
                                        placeholder="Email" />
                                </View>
                                <View style={styles.input_container}>
                                    <FdIconTextInput
                                        error={this.state.passwordError}
                                        svgName="key" marginRight={verticalScale(10)}
                                        isPassword="True"
                                        on_change_handler={this.handlePasswordChange}
                                        placeholder="Password" />
                                </View>
                            </View>
                            <View style={[styles.lower_form, styles.marginBtm10]}>
                                <FdFullRoundedOrange onPress={() => this.props.navigation.navigate('DeliveryLocation')}>
                                    Register
                                </FdFullRoundedOrange>
                            </View>
                            <View style={{ width: '80%', marginBottom: verticalScale(10) }}>
                                <FdHorizontalTextSplit linesWidthPercentage="25">
                                    Or Register With
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

export default Register;
