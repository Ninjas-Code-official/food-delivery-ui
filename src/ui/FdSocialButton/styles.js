import {verticalScale} from '../../utils/scaling'
import {fontStyles} from '../../utils/fontStyles'

const facebook_btn = {
    main_container:{
        flexDirection: 'row',
        width:'45%',
        backgroundColor: '#3145B6',
        height:verticalScale(45),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5
    },
    text:{
        fontFamily: fontStyles.PoppinsRegular,
        paddingTop: '3%',
        paddingLeft:'3%',
        fontSize: verticalScale(14),
        color: 'white'
    }
}

const google_btn = {
    main_container:{
        flexDirection: 'row',
        width:'45%',
        backgroundColor: '#EB3800',
        height:verticalScale(45),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5
    },
    text:{
        fontFamily: fontStyles.PoppinsRegular,
        paddingTop: '3%',
        paddingLeft:'3%',
        fontSize: verticalScale(14),
        color: 'white'
    }
}

export {facebook_btn, google_btn}