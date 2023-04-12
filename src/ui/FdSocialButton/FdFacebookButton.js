import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { facebook_btn as styles } from './styles';

const FdFacebookButton = props => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={[styles.main_container]}
    onPress={props.onPress}
  >
    <Image
      style={{ width: verticalScale(18), height: verticalScale(18) }}
      source={require('../../assets/images/facebook.png')}
    />
    <Text style={[styles.text]}>
      Facebook
    </Text>
  </TouchableOpacity>
);

export default FdFacebookButton;
