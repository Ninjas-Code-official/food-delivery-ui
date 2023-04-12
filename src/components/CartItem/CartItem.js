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

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: this.props.quantity
        }
        this.onAddPressed = this.onAddPressed.bind(this)
        this.onRemovePressed = this.onRemovePressed.bind(this)
    }
    onAddPressed = () => {
        this.setState(prevState => ({
            quantity: +prevState.quantity + 1
        }))
    }
    onRemovePressed = () => {
        if(this.state.quantity > 1) {
            this.setState(prevState => ({
                quantity: +prevState.quantity - 1
            }))
        } 
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.imageRes}
                            source={imagePath[this.props.image]}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{this.props.title}</Text>
                        </View>
                        <View style={styles.actionContainer}>
                            <TouchableOpacity 
                            style={styles.actionContainerBtns}
                            onPress={()=>this.onRemovePressed()}>
                                <Text style={styles.actionContainerBtnsText}>-</Text>
                            </TouchableOpacity>
                            <View style={styles.actionContainerView}>
                                <Text style={styles.actionContainerViewText}>{this.state.quantity}</Text>
                            </View>
                            <TouchableOpacity 
                            style={styles.actionContainerBtns}
                            onPress={()=>this.onAddPressed()}>
                                <Text style={styles.actionContainerBtnsText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>
                            ${this.props.price}.00
                        </Text>
                    </View>
                </View>
            </View>
        );

    }
}

export default CartItem;
