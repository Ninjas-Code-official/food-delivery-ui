import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1,
    },
    orderContainer: {
        height: '12%',
        width: '100%',
        alignItems: 'flex-end',
    },
    line: {
        width: '100%',
        height: verticalScale(1),
        backgroundColor: colors.lightGrayColor
    },
    orderSubContainer: {
        height: '100%',
        width: '95%',
        justifyContent: 'center',
    },
    orderSubContainerTitle: {
        height: '50%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    orderSubContainerTitleText: {
        fontFamily: fontStyles.PoppinsBold,
        color: colors.primaryBlackColor,
        fontSize: verticalScale(16),
    },
    orderSubContainerDes: {
        height: '30%',
        width: '100%',
    },
    orderSubContainerDesText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        color: colors.fontGreyColor,
    },
    updatedFoodItemContainer: {
        height:'12%' ,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    foodItemsContainer: {
        height: '20%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    foodItemsSubContainer: {
        width: '95%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    leftContainer: {
        width: '25%',
        height: '100%',
    },
    smallText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
    },
    priceText: {
        fontSize: verticalScale(15),
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.primaryOrangeColor,
    },
    middleContainer: {
        width: '40%',
        height: '100%',
    },
    rightContainer: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
    },
    timelineContainer: {
        height: '46%',
        width: '100%',
        justifyContent: 'center',
    },
    timelineSubContainer: {
        height: '90%',
        width: '95%',
    },
    ratingContainer: {
        backgroundColor: 'white',
        height: '10%',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    ratingSubContainer: {
        height: '90%',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    ratingStarsContainer: {
        justifyContent: 'center',
        width: '60%',
        height: '100%',
        alignItems: 'flex-start',
        marginLeft: '5%',

    },
    starsReviewContainer: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    starsReviewContainerText: {
        fontFamily: fontStyles.PoppinsBold,
        fontSize: verticalScale(12),
        color: colors.fontBlackColor,
    },
};
