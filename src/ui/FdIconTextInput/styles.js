import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';

export default {
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontSize: 46,
        alignItems: 'center',
        paddingBottom: 0,
        marginBottom: 0,
    },

    textinput: {
        fontFamily: fontStyles.PoppinsRegular,
        width: '90%',
        fontSize: verticalScale(18),
        paddingBottom: 3, // give a slight offset so that its not intersecting with bottom border
        marginBottom: 0,
    },
};
