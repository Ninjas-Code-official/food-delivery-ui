import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import FdRatingReadonly from '../../ui/FdRating/FdRatingReadonly';

class ReviewCard extends React.Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.row]}>
                <View style={[styles.row_left]}>
                    <Text style={[styles.orderId_text]}>
                            Your Order Id -
                            {' '}
                    {this.props.orderId}
                  </Text>
                        <Text style={[styles.order_datetimePassed]}>
                            {this.props.reviewDatetimeDiff}
                  </Text>
                  </View>
                    <View style={[styles.row_right]}>
                        <FdRatingReadonly starsCount={this.props.reviewRating} />
                  </View>
              </View>
                <View style={[styles.lower_text]}>
                    <Text style={[styles.reviewText]}>
                        {this.props.reviewText}
                  </Text>
              </View>

          </View>
        );
    }
}

export default ReviewCard;
