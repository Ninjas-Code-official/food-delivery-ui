import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';

export default {
    flex: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '20%',
        height: '80%',
    },
    imageItem: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    middleContainer: {
        width: '50%',
        height: '80%',
        flexDirection: 'column',
        marginLeft: verticalScale(10),
    },
    titleContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
    },
    title: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
    },
    descContainer: {
        width: '100%',
        height: '20%',
    },
    desc: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(12),
    },
    priceContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
    },
    price: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.orangeColor,
    },
    actionsContainer: {
        width: '20%',
        height: '80%',
        flexDirection: 'column',
    },
    addContainer: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtnContainer: {
        width: '70%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.greenColor,
        borderWidth: verticalScale(2),
        borderRadius: verticalScale(3),
    },
    addBtnText: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.greenColor,
        fontSize: verticalScale(10),
    },
    likesAndTextContainer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    likesContainer: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likesImage: {
        width: '60%',
        height: '60%',
    },
    likesTextContainer: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likesText: {
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.fontGreyColor,
        fontSize: verticalScale(10),
    },
};
