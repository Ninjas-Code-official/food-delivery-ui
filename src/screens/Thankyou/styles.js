import { verticalScale } from '../../utils/scaling'
import { colors } from '../../utils/colors'
import { fontStyles } from '../../utils/fontStyles'


export default {
    flex: {
        flex: 1
    },
    container: {
        width: '100%',
        height: '100%'
    },
    top_container:{
        height: '30%',
        width: '100%',
        backgroundColor:'#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%',
        borderBottomWidth: 2,
        borderBottomColor: colors.greyLinesColor
    },
    thank_text:{
        marginTop: verticalScale(8),
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(28),
        color: colors.primaryBlackColor
    },
    order_confirmed_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.primaryBlackColor
    },
    middle_container:{
        height: '40%',
        width: '100%'
    },
    singleline_card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:'5%',
        paddingRight: '5%',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderBottomWidth: 2,
        borderBottomColor: colors.greyLinesColor,
        width: '100%'
    },
    card_left_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.secondaryBlackColor,
    },
    card_right_text:{
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(16),
        color: colors.fontGreyColor
    },
    mulitline_card:{
        paddingLeft:'5%',
        paddingRight: '5%',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderBottomWidth: 2,
        borderBottomColor: colors.greyLinesColor,
        width: '100%'
    },
    order_detail:{
        color: colors.fontGreyColor,
        fontFamily: fontStyles.PoppinsRegular,
        fontSize: verticalScale(10)
    },
    bottom_container:{
        alignSelf: 'center',
        height: '22%', 
        width: '80%'
    },
    back_container_blackbtn:{
        marginTop: verticalScale(15)
    }
}