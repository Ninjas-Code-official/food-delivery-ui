import React from 'react';
import {
    View, Text, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { verticalScale } from '../../utils/scaling';

class NotificationCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const card_height = this.props.height ? this.props.height : verticalScale(90);
        return (
            <View style={[styles.container, { height: card_height }]}>
                <View style={[styles.row]}>
                <View style={[styles.image_container]}>
                    <Image style={[styles.image]} source={require('../../assets/images/notificationDefault.png')} />
                  </View>
                <View style={[styles.text_container]}>
                        <Text style={[styles.text]}>
                            {this.props.notificationText}
                    {' '}
                  </Text>
                    </View>
                    <View style={[styles.icon_container]}>
                        <TouchableOpacity onPress={this.props.onNextPress}>
                            <Image
                                style={styles.right_arrow}
                            source={require('../../assets/icons/rightArrow.png')}
                          />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
        );
    }
}

export default NotificationCard;
