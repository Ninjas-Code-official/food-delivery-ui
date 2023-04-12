import { verticalScale } from '../../../utils/scaling';
import { fontStyles } from '../../../utils/fontStyles';
import { colors } from '../../../utils/colors';

const Orange_btn_Sm = {
    fdSOrange: {
        width: verticalScale(100),
        height: verticalScale(40),
        backgroundColor: colors.primaryOrangeColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    fdSText: {
        color: colors.secondaryWhiteColor,
        fontFamily: fontStyles.PoppinsMedium,
    },
};
const White_btn_Sm = {
    fdSWhite: {
        width: verticalScale(100),
        height: verticalScale(40),
        backgroundColor: colors.secondaryWhiteColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderWidth: verticalScale(1.5),
        borderColor: colors.primaryBlackColor,
    },
    fdSText: {
        color: colors.primaryBlackColor,
        fontFamily: fontStyles.PoppinsMedium,
    },
};

export { Orange_btn_Sm, White_btn_Sm };
