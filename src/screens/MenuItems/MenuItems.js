import React from 'react';
import {
    View, Text, ImageBackground, ScrollView,
} from 'react-native';
import Header from '../../components/Header/Header';
import MenuItemsData from '../../utils/menuItemsData';
import ItemCard from '../../components/ItemCard/ItemCard';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'
class MenuItems extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <Header
                svgNameL="leftArrow"
                    svgNameR="cart"
                headingTitle="Breakfast"
                navigationObj={this.props.navigation}
              />
            <View style={[styles.flex, { backgroundColor: 'white' }]}>
                  <View style={styles.backgroundImageContainer}>
                        <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../../assets/images/ItemsList/coverBreakfast.jpg')}
                  >
                            <View style={styles.backgroundImageTextContainer}>
                            <Text style={styles.backgroundImageText}>All hapiness depends on a leisurely breakfast.</Text>
                            </View>
                  </ImageBackground>
                    </View>
                    <View style={styles.flex}>
                        <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
                        {MenuItemsData.map((data, ind) => (
                            <View key={ind} style={styles.cardViewContainer}>
                            <ItemCard
                                        onPress={() => this.props.navigation.navigate('ItemDetail')}
                                        title={data.title}
                                      description={data.desc}
                                        image={data.image}
                                        price={data.price}
                                        likes={data.likes}
                                    />
                                </View>
                            ))}
                      </ScrollView>
              </View>
                </View>
          </SafeAreaView>
        );
    }
}

export default MenuItems;
