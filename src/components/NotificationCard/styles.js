import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';

export default {
    container: {
        width: '100%',
        borderBottomWidth: verticalScale(1),
        borderBottomColor: colors.greyLinesColor,
    },
    row: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    image_container: {
        width: '18%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: verticalScale(52),
        width: verticalScale(52),
        borderRadius: verticalScale(26),
    },
    text_container: {
        width: '55%',
        marginLeft: '3%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: fontStyles.PoppinsMedium,
        fontSize: verticalScale(12),
        color: colors.primaryBlackColor,
    },
    icon_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '14%',
    },
    right_arrow: {
        height: verticalScale(15),
        width: verticalScale(15),
    },
};
