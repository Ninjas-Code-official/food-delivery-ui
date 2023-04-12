import React from 'react';
import { View, Image } from 'react-native';
import FdParagraph from '../../ui/FdText/FdParagraph';
import FdFullRoundedOrange from '../../ui/FdButton/FdFullRounded/FdFullRoundedOrange';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'

class DeliveryLocation extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <View style={[styles.container]}>
                    <View style={[styles.container_top]}>
                        <Image
                            style={styles.logo_image}
                            source={require('../../assets/images/location.png')}
                            resizeMode="contain"
                        />
                        <FdParagraph>
                            Set your delivery location so we could send you endless taste of delicious food.
                    </FdParagraph>
                    </View>
                    <View style={[styles.container_bot]}>
                        <FdFullRoundedOrange onPress={() => this.props.navigation.navigate('Menu')}>
                            Turn on Location
                    </FdFullRoundedOrange>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default DeliveryLocation;
