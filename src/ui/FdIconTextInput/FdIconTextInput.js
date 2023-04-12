import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import styles from './styles';

const svg_urls = {
    emailphone: require('../../assets/images/emailphone.png'),
    key: require('../../assets/images/key.png'),
    leftArrow: require('../../assets/images/leftarrow.png'),
    phone: require('../../assets/images/smartphone.png'),
    email: require('../../assets/images/email.png'),
};

class FdIconTextinput extends React.Component {
    constructor() {
        super();
        this.svg = null;
    }

    render() {
        this.svg = svg_urls[this.props.svgName];

        return (
            <View style={[styles.btnContainer]}>
            <Image
                style={{
                        paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : verticalScale(5),
                        marginRight: this.props.marginRight ? this.props.marginRight : verticalScale(5),
                        width: this.props.width ? this.props.width : verticalScale(26),
                        height: this.props.height ? this.props.height : verticalScale(26),
                    }}
                source={this.svg}
              />
                <TextInput
                style={[styles.textinput]}
                    placeholderTextColor={colors.fontGreyColor}
                    onChangeText={this.props.on_change_handler}
                    placeholder={this.props.placeholder ? this.props.placeholder : 'Enter the value'}
                    secureTextEntry={!!this.props.isPassword}
              />
          </View>
        );
    }
}


export default FdIconTextinput;
