import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default {
    flex: {
        flex: 1,
    },
    reviewTextContainer: {
        width: '100%',
        height: height*.1,
        alignItems: 'flex-end',
    },
    reviewTextSubContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    reviewTextContainerText: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    reviewStyle: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.fontBlackColor,
        fontSize: verticalScale(15),
    },
    reviewTextContainerImage: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    reviewTextSubcontainerImage: {
        height: '20%',
        width: '20%',
    },
    imageResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    ratingContainer: {
        width: '100%',
        height: height*.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingSubContainer: {
        width: '70%',
        height: '60%',
    },
    inputContainer: {
        width: '100%',
        height: height*.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputSubContainer: {
        width: '80%',
        height: '40%',
        borderBottomColor: colors.lightGrayColor,
        borderBottomWidth: verticalScale(1),
    },
    textinput: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        height: '100%',
    },
    btnContainer: {
        width: '100%',
        height: height*.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSubContainer: {
        width: '80%',
        height: '60%',
    },
    btnTouch: {
        flex: 1,
        backgroundColor: colors.primaryOrangeColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.secondaryWhiteColor,
        fontSize: verticalScale(16),
    },
};
