import { verticalScale } from '../../utils/scaling';


export default {
    flex: {
        flex: 1
    },
    mainContainer: {
        flex:1,
        flexDirection:'column'
    },
    topContainer: {
        alignSelf:'center',
        width:'75%',
        height:'65%'
    },
    mgTop10: {
        marginTop: verticalScale(10)
    },
    imgContainerTop: {
        alignSelf:'center',
        width:'80%',
        height:'45%'
    },
    imgResponsive: {
        flex:1, 
        height: undefined, 
        width: undefined
    },
    paraContainer: {
        alignSelf:'center',
        width:'85%',
        height:'35%'
    },
    btnContainer: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignSelf:'center',
        width:'100%',
        height:'20%'
    },
    imgBotContainer: {
        width:'100%',
        height:'35%'
    }
}