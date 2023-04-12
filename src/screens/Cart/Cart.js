import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header/Header';
import CartData from '../../utils/cartData';
import CartItem from '../../components/CartItem/CartItem';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'

class Cart extends React.Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
        <Header
          svgNameL="leftArrow"
          svgNameR="cart"
          headingTitle="My Cart"
          navigationObj={this.props.navigation}
        />
        <View style={styles.flex}>
          <ScrollView style={styles.flex}>
            {CartData.map((data, ind) => (
              <View key={ind} style={styles.itemContainer}>
                <CartItem
                  title={data.title}
                  price={data.price}
                  image={data.image}
                  quantity={data.quantity}
                />
              </View>
            ))}
            <View style={styles.reciptContainer}>
              <View style={styles.contentContainer}>
                <View style={styles.itemTotalContainer}>
                  <View style={styles.itemTotalTitle}>
                    <Text style={styles.itemTotalTitleText}>Item Total</Text>
                  </View>
                  <View style={styles.itemTotalValue}>
                    <Text style={styles.itemTotalValueText}>$47</Text>
                  </View>
                </View>
                <View style={styles.itemDeliveryContainer}>
                  <View style={styles.itemTotalTitle}>
                    <Text style={styles.itemTotalTitleText}>Delivery Charges</Text>
                  </View>
                  <View style={styles.itemTotalValue}>
                    <Text style={styles.itemTotalValueText}>$30</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.totalContainer}>
              <View style={styles.itemTotalTitle}>
                <Text style={styles.TotalText}>Total</Text>
              </View>
              <View style={styles.itemTotalValue}>
                <Text style={styles.TotalTextAmount}>$65.00</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Payment')}
              style={[styles.checkoutContainer, { alignSelf: 'flex-end' }]}
            >
              <Text style={styles.checkoutContainerText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Cart;
