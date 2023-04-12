import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';

export default {
    main_container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: verticalScale(16),
        fontFamily: fontStyles.PoppinsRegular,
        color: colors.fontBlackColor,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: '4.5%',
    },
};
