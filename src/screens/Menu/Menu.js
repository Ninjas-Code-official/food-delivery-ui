import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import MenuCard from '../../components/MenuCard/MenuCard';
import MenuCardData from '../../utils/menuCardData';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'
class Menu extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <Header
                    svgNameL="menu"
                    svgNameR="cart"
                    headingTitle="Menu"
                    navigationObj={this.props.navigation}
                />
                <View style={[styles.flex, { backgroundColor: 'white' }]}>
                    <View style={styles.mainContentContainer}>
                        <View style={styles.flex}>
                            <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
                                {MenuCardData.map((data, ind) => (
                                    <View key={ind} style={styles.cardViewContainer}>
                                        <MenuCard
                                            onPress={() => this.props.navigation.navigate('MenuItems')}
                                            title={data.title}
                                            description={data.description}
                                            image={data.image}
                                            backgroundColor={data.backgroundColor}
                                            borderColor={data.borderColor}
                                        />
                                    </View>
                                ))}
                                <View style={styles.marginBot}></View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Menu;
