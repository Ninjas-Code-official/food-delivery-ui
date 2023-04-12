import { verticalScale } from '../../../utils/scaling';
import { fontStyles } from '../../../utils/fontStyles';
import { colors } from '../../../utils/colors';

const Black_Btn_Styles = {
    RContainer: {
        width: '100%',
        height: verticalScale(50),
        borderRadius: 5,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TC_btn: {
        width: '100%',
        height: '100%',
    },
    Text: {
        fontFamily: fontStyles.PoppinsMedium,
        color: colors.primaryBlackColor,
        fontSize: verticalScale(18),
    },
};

const Green_Btn_Styles = {
    RContainer: {
        width: '100%',
        height: verticalScale(50),
        borderRadius: 5,
        backgroundColor: colors.primaryGreenColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TC_btn: {
        width: '100%',
        height: '100%',
    },
    Text: {
        fontFamily: fontStyles.PoppinsMedium,
        color: colors.secondaryWhiteColor,
        fontSize: verticalScale(18),
    },
};

const Orange_Btn_Styles = {
    RContainer: {
        width: '100%',
        height: verticalScale(50),
        borderRadius: verticalScale(5),
        backgroundColor: colors.primaryOrangeColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TC_btn: {
        width: '100%',
        height: '100%',
    },
    Text: {
        fontFamily: fontStyles.PoppinsMedium,
        color: colors.secondaryWhiteColor,
        fontSize: verticalScale(18),
    },
};

export { Black_Btn_Styles, Green_Btn_Styles, Orange_Btn_Styles };
