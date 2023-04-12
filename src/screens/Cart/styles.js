import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1,
    },
    itemContainer: {
        width: '100%',
        height: verticalScale(120),
    },
    reciptContainer: {
        width: '100%',
        height: verticalScale(100),
        alignItems: 'center',
        borderBottomWidth: verticalScale(1),
        borderBoborderBottomColor: colors.fontGreyColor,
    },
    contentContainer: {
        width: '95%',
        height: '100%',
        justifyContent: 'space-around',
    },
    itemTotalContainer: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
    },
    itemTotalTitle: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
    },
    itemTotalTitleText: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.fontBlackColor,
        fontSize: verticalScale(14),
    },
    itemTotalValue: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTotalValueText: {
        fontFamily: fontStyles.PoppinsBold,
        color: 'black',
        fontSize: verticalScale(14),
    },
    itemDeliveryContainer: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
    },
    totalContainer: {
        width: '95%',
        height: verticalScale(100),
        flexDirection: 'row',
        alignSelf: 'center',
    },
    TotalText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(20),
        color: colors.fontBlackColor,
    },
    TotalTextAmount: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(20),
        color: colors.primaryOrangeColor,
    },
    checkoutContainer: {
        width: '100%',
        height: verticalScale(45),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryOrangeColor,
    },
    checkoutContainerText: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.secondaryWhiteColor,
        fontSize: verticalScale(16),
    },
};
