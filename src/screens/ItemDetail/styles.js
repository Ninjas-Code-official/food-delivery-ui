import { verticalScale } from '../../utils/scaling';
import { colors } from '../../utils/colors';
import { fontStyles } from '../../utils/fontStyles';

export default {
    flex: {
        flex: 1
    },
    container: {
        height: '90%',
        width: '90%',
        alignSelf: 'center',
    },
    container_top: {
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container_topText: {
        color: colors.primaryOrangeColor,
        fontFamily: fontStyles.PoppinsSemiBold,
        fontSize: verticalScale(18),
    },
    container_image: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
    },
    container_image_image: {
        width: '100%',
        height: '100%',
    },
    container_content: {
        width: '90%',
        height: '40%',
        alignSelf: 'center',
    },
    container_content_text: {
        marginTop: verticalScale(18),
        fontSize: verticalScale(13),
        lineHeight: verticalScale(21),
        color: colors.primaryBlackColor,
        textAlign: 'center',
        fontFamily: fontStyles.PoppinsRegular,
    },
    container_content_view: {
        marginTop: verticalScale(13),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '75%',
        height: '30%',
        alignItems: 'center',
    },
    container_content_view_dropDown: {
        width: '25%',
    },
    width1: {
        width: '1%',
    },
    width1_view: {
        borderLeftWidth: 1.5,
        borderLeftColor: colors.fontGreyColor,
        height: '60%',
    },
    width25: {
        width: '25%',
    },
    bottomContainer: {
        width: '90%',
        alignSelf: 'center',
        height: '30%',
    },
    bottomContainerView: {
        width: '100%',
        marginTop: verticalScale(15),
    },

};
