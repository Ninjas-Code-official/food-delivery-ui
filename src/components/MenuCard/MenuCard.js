import React from 'react';
import {
  Text, TouchableOpacity, View, Image,
} from 'react-native';
import styles from './style';

const imagePath = {
  breakfast: require('../../assets/images/menuItems/breakfast.gif'),
  lunch: require('../../assets/images/menuItems/lunch.png'),
  dinner: require('../../assets/images/menuItems/dinner.png'),
  drinks: require('../../assets/images/menuItems/drinks.png'),
  icecream: require('../../assets/images/menuItems/icecream.png'),
};

const menuCard = props => (

  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.subContainer, { backgroundColor: props.backgroundColor, borderColor: props.borderColor }]}
      onPress={props.onPress}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.imgResponsive}
          source={imagePath[props.image]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default menuCard;
