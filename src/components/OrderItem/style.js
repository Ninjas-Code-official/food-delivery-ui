import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';

const Styles = {
    card_container: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: colors.greyLinesColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card_container__left: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '70%',
        width: '58%',
        paddingLeft: '5%',

    },
    card_container__right: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingRight: '5%',
        height: '80%',
        width: '25%',

    },
    left_toptextLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderIdText: {
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(13),
        color: colors.primaryBlackColor,
    },
    orderDeliveredText: {
        alignSelf: 'center',
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(10),
        color: colors.primaryGreenColor,
    },
    orderAmountText: {
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(10),
        color: colors.fontGreyColor,
    },
    orderDatetimeText: {
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(10),
        color: colors.fontGreyColor,
        marginTop: verticalScale(3),
    },
    orangeBtn: {
        backgroundColor: colors.primaryOrangeColor,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        height: verticalScale(18),
    },
    orangeBtn__Text: {
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(10),
        color: colors.secondaryWhiteColor,
    },
};

export default Styles;
