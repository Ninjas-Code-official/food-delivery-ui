import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Black_Btn_Styles as Styles } from './styles';

const FdFullRoundedBlack = props => (
    <TouchableOpacity
        activeOpacity={0.5}
        style={[Styles.RContainer, Styles.kala]}
        onPress={props.onPress}
    >

        <Text style={Styles.Text}>
            {props.children}
        </Text>
    </TouchableOpacity>

);

export default FdFullRoundedBlack;
