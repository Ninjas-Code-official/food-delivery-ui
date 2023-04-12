import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { colors } from '../../../utils/colors';
import FdFullRoundedOrange from '../../../ui/FdButton/FdFullRounded/FdFullRoundedOrange';
import styles from './styles';

class Paypal extends React.Component {
    render() {
        return (
            <View style={[styles.main]}>
            <View style={[styles.cnic_container]}>
                  <View style={[styles.cnic]}>
                <TextInput
                            maxLength={14}
                            placeholder="Card Number"
                            keyboardType="numeric"
                            placeholderTextColor={colors.fontBlackColor}
                            style={[styles.cnic_text]}
                        />
                    </View>
                </View>
            <View style={[styles.expiry_container]}>
                  <Text style={[styles.expiry_label]}>
                    Expiry
              </Text>
                  <View style={[styles.expiry_row]}>
                <View style={styles.month}>
                          <TextInput
                                placeholder="MM"
                                maxLength={2} keyboardType="numeric"
                                placeholderTextColor={colors.fontBlackColor}
                              style={styles.month_text}
                            />
                        </View>
                        <View style={[styles.year]}>
                        <TextInput
                                placeholder="YYYY"
                              maxLength={4} keyboardType="numeric"
                                placeholderTextColor={colors.fontBlackColor}
                                style={styles.year_text}
                            />
                      </View>

                <View style={styles.blank_placeholder} />
              </View>
                </View>
            <View style={styles.btn_container}>
                    <FdFullRoundedOrange>
                        Save Changes
              </FdFullRoundedOrange>
                </View>

          </View>
        );
    }
}


export default Paypal;
