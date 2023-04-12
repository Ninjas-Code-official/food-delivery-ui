import React from 'react'
import { View, Text, Image } from 'react-native'
import { fontStyles } from '../../utils/fontStyles'
import { colors } from '../../utils/colors'
import Dropdown from './dropdown/index';
import styles from './styles'
import { verticalScale } from '../../utils/scaling';

const FdDropdown = (props) => {

    return (
        <View >
            <Text style={{
                fontFamily: fontStyles.PoppinsMedium,
                color: colors.primaryBlackColor,
                fontSize: verticalScale(10)
            }}>
                {props.label}
            </Text>
            <View>
                <Dropdown
                    value={props.value}
                    data={props.data}
                    fontSize={verticalScale(18)}
                    itemTextStyle={props.itemTextStyle}
                    containerStyle={props.containerStyle}
                    itemPadding={5}
                    labelHeight={10}
                    onSelect={props.onSelect}
                />
                <View pointerEvents="none" style={[styles.image_container]}>
                    <Image style={styles.image} source={require('../../assets/icons/downArrow.png')} />
                </View>
            </View>
        </View>

    )
}

export default FdDropdown 
