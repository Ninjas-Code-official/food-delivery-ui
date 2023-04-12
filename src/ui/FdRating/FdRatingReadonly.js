import React from 'react';
import { Rating } from 'react-native-ratings';
import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';

const CUSTOM_STAR = require('../../assets/icons/gapStarRating.png');

const FdRatingReadonly = props => (
    <Rating
        type="custom"
        ratingImage={CUSTOM_STAR}
        startingValue={props.starsCount}
        ratingColor={colors.primaryGreenColor}
        ratingCount={5}
        imageSize={verticalScale(10)}
        readonly
    />
);
export default FdRatingReadonly;
