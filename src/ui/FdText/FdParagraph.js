import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const fdParagraph = props => (
    <Text style={styles.fdParagraph}>
        {props.children}
  </Text>
);


export default fdParagraph;
