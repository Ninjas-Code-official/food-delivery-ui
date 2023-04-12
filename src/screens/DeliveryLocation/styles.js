import { verticalScale } from '../../utils/scaling';

export default {
    flex: {
        flex: 1
    },
    container: {
        height: '100%',
        width: '75%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    container_top: {
        width: '100%',
        height: '68%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container_bot: {
        marginTop: verticalScale(30),
        width: '80%',
    },
    logo_image: {
        height: '60%',
        width: '65%',
    },
};
