import { verticalScale } from '../../utils/scaling';

export default {
    flex: {
        flex: 1,
    },
    mainContentContainer: {
        width: '90%',
        height: '100%',
        alignSelf: 'center',
    },
    cardViewContainer: {
        width: '100%',
        height: verticalScale(130),
        marginTop: verticalScale(30),
    },
    marginBot: {
        width: '100%',
        height: verticalScale(30),
    }
};
