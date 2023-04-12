import React from 'react';
import { View, ScrollView } from 'react-native';
import { colors } from '../../utils/colors';
import Header from '../../components/Header/Header';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ReviewsData from '../../utils/reviewsData';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'

class Reviews extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <Header
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle="Reviews"
                    navigationObj={this.props.navigation}
                />
                <View style={styles.container}>
                    {/* Added border bottom cuz some unknown scrollview issue causes last element last pixel row to not show. */}
                    <ScrollView
                        contentContainerStyle={{ borderBottomWidth: 1, borderBottomColor: colors.greyLinesColor }}
                    >
                        {ReviewsData.map((review, ind) => (
                            <ReviewCard
                                key={ind}
                                orderId={review.orderId}
                                reviewDatetimeDiff={review.reviewDatetimeDiff}
                                reviewRating={review.reviewRating}
                                reviewText={review.reviewText}
                            />
                        ))}
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}

export default Reviews;
