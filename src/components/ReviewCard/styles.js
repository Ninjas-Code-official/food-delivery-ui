import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';

export default {
    container: {
        width: '100%',
        minHeight: verticalScale(80),
        maxHeight: verticalScale(120),
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.fontGreyColor,
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginBottom: '1%',
    },
    row_left: {
        flexDirection: 'column',
    },
    lower_text: {
        width: '90%',
        alignSelf: 'center',
    },
    orderId_text: {
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(13),
        color: colors.primaryBlackColor,

    },
    order_datetimePassed: {
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(10),
        lineHeight: verticalScale(10),
        color: colors.fontGreyColor,
    },
    reviewText: {
        fontFamily: fontStyles.PoppinsMedium,
        color: colors.primaryBlackColor,
        fontSize: verticalScale(11),
        lineHeight: verticalScale(18),
    },
};
