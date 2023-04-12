import { verticalScale } from '../../../utils/scaling';
import { colors } from '../../../utils/colors';
import { fontStyles } from '../../../utils/fontStyles';

export default {
    main: {
        width: '95%',
        alignSelf: 'center',
    },
    cnic_container: {
        height: verticalScale(40),
        justifyContent: 'center',
    },
    cnic: {
        borderBottomWidth: 1,
        borderColor: colors.fontGreyColor,
    },
    cnic_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    expiry_container: {
        height: verticalScale(70),
        justifyContent: 'center',
    },
    expiry_label: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(10),
        color: colors.primaryBlackColor,
    },
    expiry_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    month: {
        width: '28%',
        borderBottomWidth: 1,
        borderBottomColor: colors.fontGreyColor,
    },
    month_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    year: {
        width: '28%',
        borderBottomWidth: 1,
        borderBottomColor: colors.fontGreyColor,
    },
    year_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    cvv: {
        width: '36%',
        borderBottomWidth: 1,
        borderBottomColor: colors.fontGreyColor,
    },
    cvv_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(14),
    },
    message: {
        height: verticalScale(50),
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    message_text: {
        textAlign: 'center',
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(10.5),
    },
    blank_placeholder: {
        width: '36%',
        borderBottomWidth: 0,
        borderBottomColor: colors.fontGreyColor,
    },
    btn_container: {
        height: verticalScale(60),
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
};
