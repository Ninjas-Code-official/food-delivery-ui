import { Dimensions } from 'react-native';
import { verticalScale } from '../../utils/scaling';
import { fontStyles } from '../../utils/fontStyles';
import { colors } from '../../utils/colors';
const { height, width } = Dimensions.get('window');

export default {
    container: {
        flex: 1,
        flexDirection: 'column',
        height,
        width,
        alignItems: 'center',
    },
    container_top: {
        height: '54%',
    },
    container_bot: {
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading_container: {
        fontFamily: fontStyles.PoppinsRegular,
        width: width * 0.80,
        marginTop: height * 0.052,
        paddingLeft: '8%',
    },
    heading_container_s1: {
        color: colors.fontBlackColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(26),
        fontStyle: 'italic',

    },
    heading_container_s2: {
        color: colors.fontBlackColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(36),
        fontWeight: '400',

        lineHeight: height * 0.07,
    },

    decription: {
        color: colors.fontBlackColor,
        textAlign: 'center',
        width: width * 0.80,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(17),

    },
    main_btn: {
        marginTop: height * 0.04,
        height: height * 0.08,
        width: width * 0.60,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#ff550a',

    },
    main_btn_text: {
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(22),
        color: '#ffffff',
    },
    image: {
        width: width * 0.95,
        height: height * 0.365,
    },
    backgroundGradient: {
        position: 'absolute',
        zIndex: -1,
        height: '40%',
        width,
    },
};
