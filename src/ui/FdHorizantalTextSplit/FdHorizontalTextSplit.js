import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FdHorizontalTextSplit = props => (
  <View style={[styles.main_container]}>
    <View style={[styles.line, { minWidth: `${props.linesWidthPercentage}%` }]} />
    <Text style={styles.text}>
      {props.children}
    </Text>
    <View style={[styles.line, { minWidth: `${props.linesWidthPercentage}%` }]} />

  </View>
);


export default FdHorizontalTextSplit;
