import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1,
    },
    backgroundImageContainer: {
        height: '35%',
        width: '100%',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    backgroundImageTextContainer: {
        width: '100%',
        height: '15%',
        backgroundColor: '#21262d90',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(40),
    },
    backgroundImageText: {
        color: 'white',
        fontFamily: fontStyles.PoppinsMedium,
    },
    cardViewContainer: {
        width: '100%',
        height: verticalScale(100),
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
};
