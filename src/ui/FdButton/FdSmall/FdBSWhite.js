import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { White_btn_Sm as styles } from './styles';


const fdBSWhite = props => (
  <TouchableOpacity
    style={styles.fdSWhite}
    onPress={props.onPress}
  >
    <Text style={styles.fdSText}>
      {props.children}
    </Text>
  </TouchableOpacity>
);


export default fdBSWhite;
