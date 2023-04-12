import React from 'react';
import {
    Text, TouchableOpacity, View, Image,
} from 'react-native';
import styles from './styles';

const imagePath = {
    omelette: require('../../assets/images/ItemsList/omelette.jpg'),
    beignet: require('../../assets/images/ItemsList/beignet.jpeg'),
    cornmealMush: require('../../assets/images/ItemsList/cornmealMush.jpeg'),
    fruitPizza: require('../../assets/images/ItemsList/fruitPizza.jpg'),
    like: require('../../assets/images/ItemsList/like.png'),
};

const itemCard = props => (

    <View style={styles.flex}>
        <TouchableOpacity
        onPress={props.onPress}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
              <Image
                  style={styles.imageItem}
                  source={imagePath[props.image]}
                    resizeMode="contain"
                />
            </View>
        <View style={styles.middleContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
              <View style={styles.descContainer}>
            <Text style={styles.desc}>{props.description}</Text>
                </View>
              <View style={styles.priceContainer}>
            <Text style={styles.price}>
$
                  {props.price}
                    </Text>
                </View>
            </View>
        <View style={styles.actionsContainer}>
                <View style={styles.addContainer}>
                    <TouchableOpacity style={styles.addBtnContainer}>
                <Text style={styles.addBtnText}>+ADD</Text>
              </TouchableOpacity>
          </View>
                <View style={styles.likesAndTextContainer}>
                    <View style={styles.likesContainer}>
                        <Image
                        style={styles.likesImage}
                        source={imagePath.like}
                        resizeMode="contain"
                      />
                  </View>
                    <View style={styles.likesTextContainer}>
                        <Text style={styles.likesText}>{props.likes}</Text>
                  </View>
          </View>
            </View>
      </TouchableOpacity>
  </View>
);

export default itemCard;
