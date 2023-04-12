import React from 'react';
import { TouchableOpacity, Image, View, StatusBar, Platform } from 'react-native'
import {verticalScale} from '../../utils/scaling'

const HeaderBackArrow = (props) => {
    return(
        <View style={{width: '100%',height: '10%',justifyContent: 'center', marginTop: Platform.OS === 'ios' ? 0 : -(StatusBar.currentHeight)}}>
            <TouchableOpacity
            style={{marginLeft: '5%'}}
            onPress={props.on_press}>
                <Image 
                source={require('../../assets/images/leftarrow.png')}
                style={{height:verticalScale(20),width:verticalScale(20)}}
                />
            </TouchableOpacity>    
        </View>
  
    )}

export default HeaderBackArrow