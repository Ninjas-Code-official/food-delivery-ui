import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import Styles from './style';
import FdRatingReadonly from '../../ui/FdRating/FdRatingReadonly';


class OrderitemCard extends React.Component {
    constructor() {
        super();
    }

    onReorderClick = () => {}

    render() {
        const card_height = this.props.height ? this.props.height : verticalScale(100);
        const status_text = this.props.orderStatus == 1 ? 'Delivered' : 'Cancelled';
        const status_color = this.props.orderStatus == 1 ? colors.primaryGreenColor : colors.primaryRedColor;


        return (
            <View style={[Styles.card_container, { height: card_height }]}>
                <View style={[Styles.card_container__left]}>
                <View style={[Styles.left_toptextLine]}>
                    <Text style={[Styles.orderIdText]}>
                            Order Id -
                            {' '}
                            {this.props.orderId}
                        </Text>
                    <Text style={[Styles.orderDeliveredText, { color: status_color }]}>
                            (
                    {status_text}
)
                  </Text>
                    </View>
                <Text style={[Styles.orderAmountText]}>
                        Total Order Amount - $
                      {this.props.orderAmount}
                    </Text>
                    <Text style={[Styles.orderDatetimeText]}>
                        {this.props.orderDatetime.toLocaleString()}
                  </Text>
              </View>

                <View style={[Styles.card_container__right]}>
                    <FdRatingReadonly starsCount={this.props.orderRating} />
                    <TouchableOpacity
                        style={[Styles.orangeBtn]}
                        activeOpacity={0.5}
                        onPress={this.onReorderClick}
              >

                <Text style={Styles.orangeBtn__Text}>
                            Reorder
                        </Text>
              </TouchableOpacity>
                </View>
          </View>
        );
    }
}

export default OrderitemCard;
