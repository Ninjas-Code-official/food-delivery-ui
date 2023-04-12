import { fontStyles } from '../../utils/fontStyles';
import { verticalScale } from '../../utils/scaling';

const styles = {
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    imageContainer: {
        width: '35%',
        height: '90%',
    },
    imgResponsive: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    contentContainer: {
        marginLeft: 10,
        width: '55%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: verticalScale(18),
        color: 'black',
        fontFamily: fontStyles.PoppinsSemiBold,
    },
    description: {
        fontSize: verticalScale(12),
        lineHeight: 15,
        fontFamily: fontStyles.PoppinsRegular,
    },
};

export default styles;
