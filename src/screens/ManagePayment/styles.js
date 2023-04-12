import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';
import { verticalScale } from '../../utils/scaling';

const Styles = {
    flex: {
        flex: 1
    },
    container: {
        height: '90%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    top_container: {
        height: '70%',
        width: '90%',
        alignSelf: 'center',
    },
    bottom_container: {
        backgroundColor: 'red',
        height: '8%',
    },
    payment_text__container: {
        height: '10%',
        justifyContent: 'center',
    },
    payment_text: {
        fontFamily: fontStyles.PoppinsMedium,
        color: colors.primaryBlackColor,
        fontSize: verticalScale(12),
    },
    payment_forms__container: {
        height: '90%',
    },
    payment_forms__container: {
        minHeight: verticalScale(50),
    },
    payButton: {
        marginTop: '3%',
        backgroundColor: colors.primaryOrangeColor,
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    payButton_Text: {
        fontFamily: fontStyles.PoppinsMedium,
        color: colors.secondaryWhiteColor,
        fontSize: verticalScale(18),
    },
    form_body: {
        padding: verticalScale(10),
        borderWidth: verticalScale(1),
        borderColor: colors.fontGreyColor,
        borderTopWidth: 0,
    },
    header_container: {
        height: verticalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    form_header__title: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(11),
        color: colors.primaryBlackColor,
        textAlign: 'right',
    },
    form_header__subscript: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(8),
        color: colors.primaryBlackColor,
    },
};

export default Styles;
