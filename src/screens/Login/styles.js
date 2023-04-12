import { verticalScale } from '../../utils/scaling'


export default {
    flex: {
        flex: 1,
        backgroundColor: '#FFFCE2'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    login_body_container: {
        alignItems: 'center',
        height: '100%',
        width: '90%'

    },
    marginTop20: {
        marginTop: verticalScale(20)
    },
    inputContainer: {
        alignItems: 'center',
        marginBottom: verticalScale(20),
        width: '80%'
    },
    backicon_container: {
        width: '85%'
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
    },
    marginBtm20: {
        marginBottom: verticalScale(20)
    },
    marginBtm30: {
        marginBottom: verticalScale(30)
    },
    loginWithContainer: {
        width: '80%',
        marginBottom: verticalScale(22)
    }

}