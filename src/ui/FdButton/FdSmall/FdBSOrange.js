import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Orange_btn_Sm as styles } from './styles';

const fdBSOrange = props => (
  <TouchableOpacity
    style={styles.fdSOrange}
    onPress={props.onPress}
  >
    <Text style={styles.fdSText}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

export default fdBSOrange;
