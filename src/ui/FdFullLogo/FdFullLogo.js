import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const FdFullLogo = () => (
  <Image
      style={styles.logo_image}
      source={require('../../assets/images/logo.png')}
      resizeMode="contain"
    />
);

export default FdFullLogo;
