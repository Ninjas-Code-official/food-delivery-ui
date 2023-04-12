import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header/Header';
import FdDropdown from '../../ui/FdDropdown/FdDropdown';
import FdFullRoundedOrange from '../../ui/FdButton/FdFullRounded/FdFullRoundedOrange';
import FdFullRoundedGreen from '../../ui/FdButton/FdFullRounded/FdFullRoundedGreen';
import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'
const Icons = {
    unfilled_heart: require('../../assets/icons/emptyHeart.png'),
    filled_heart: require('../../assets/icons/fullHeart.png'),
};

class ItemDetail extends React.Component {
    constructor() {
        super();

        this.state = {
            productName: 'Omelette', // Name of the product
        };

        this.quantityTypes = [
            { value: '1' },
            { value: '2' },
            { value: '3' }];
        this.sizeTypes = [
            { value: 'S' },
            { value: 'M' },
            { value: 'L' }];
    }

    render() {
        const image = this.props.image_url ? { uri: this.props.image_url } : require('../../assets/images/foodPlaceholder.jpeg');

        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <Header
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle={this.state.productName}
                    navigationObj={this.props.navigation}
                />
                <View style={[styles.container]}>
                    <View style={styles.container_top}>
                        <Image source={Icons.unfilled_heart} />
                        <Text style={styles.container_topText}>
                            $25.00
                        </Text>
                    </View>
                    <View style={styles.container_image}>
                        <Image
                            resizeMode="cover"
                            style={styles.container_image_image}
                            source={image}
                        />
                    </View>
                    <View style={styles.container_content}>
                        <Text numberOfLines={5} style={styles.container_content_text}>
                            We use fresh farm beaten eggs fried with butter oil in a fring pan. Folded aorund a filling of cheese chive, vegetables mushrooms meat.
                        </Text>
                        <View style={styles.container_content_view}>
                            <View style={styles.container_content_view_dropDown}>
                                <FdDropdown
                                    label="Quantity"
                                    value="1"
                                    data={this.quantityTypes}
                                    fontSize={verticalScale(22)}
                                    itemTextStyle={{ fontFamily: fontStyles.PoppinsRegular }}
                                />
                            </View>

                            <View style={styles.width1}>
                                <View style={styles.width1_view} />
                            </View>

                            <View style={styles.width25}>
                                <FdDropdown
                                    label="Size"
                                    value="S"
                                    data={this.sizeTypes}
                                    fontSize={verticalScale(22)}
                                    itemTextStyle={{ fontFamily: fontStyles.PoppinsRegular }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.bottomContainer}>
                        <FdFullRoundedOrange
                            onPress={() => this.props.navigation.navigate('Cart')}
                        >                            
                        Order Now
                        </FdFullRoundedOrange>
                        <View style={styles.bottomContainerView}>
                            <FdFullRoundedGreen
                                onPress={() => this.props.navigation.navigate('Cart')}
                            >
                            Add to Cart
                          </FdFullRoundedGreen>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default ItemDetail;
