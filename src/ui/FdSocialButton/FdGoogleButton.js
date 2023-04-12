import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { google_btn as styles } from './styles';

const FdGoogleButton = props => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={[styles.main_container]}
    onPress={props.onPress}
  >
    <Image
      style={{ height: verticalScale(24), width: verticalScale(24) }}
      source={require('../../assets/images/google.png')}
    />
    <Text style={[styles.text]}>
      Google
      </Text>
  </TouchableOpacity>
);

export default FdGoogleButton;
