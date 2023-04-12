import { verticalScale } from '../../utils/scaling'

export default {
    flex: {
        flex: 1,
        backgroundColor: '#FFFCE2'
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',

    },
    login_body_container: {
        alignItems: 'center',
        height: '100%',
        width: '90%'
    },
    form_container: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(15)
    },
    input_container: {
        alignItems: 'center',
        marginBottom: verticalScale(18),
        width: '80%',
    },
    backicon_container: {
        width: '85%'
    },
    marginBtm10: {
        marginBottom: verticalScale(10)
    },
    register_btn: {
        width: '80%',
        marginBottom: verticalScale(10)
    },
    back_icon: {
        fontSize: verticalScale(20)
    },

    lower_form: {
        width: '80%',
        alignItems: 'center'
    },
    social_btns_container: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}