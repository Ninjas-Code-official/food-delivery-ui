import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1,
    },
    contentContainer: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: verticalScale(1),
        borderBottomColor: colors.lightGrayColor,
    },
    contentSubContainer: {
        marginLeft: '5%',
        width: '90%',
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    titleContainer: {
        width: '100%',
        height: '30%',
    },
    titleText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.fontBlackColor,
    },
    descContainer: {
        width: '100%',
        height: '60%',
    },
    colorOrange: {
        color: colors.primaryOrangeColor,
        fontSize: verticalScale(16),
    },
    colorBlack: {
        color: colors.primaryBlackColor,
    },
    descText: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
        color: colors.fontBlackColor,
    },
};
