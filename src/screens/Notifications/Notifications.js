import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import notificationsData from '../../utils/notificationsData';
import styles from './styles';
import { SafeAreaView } from 'react-navigation'

class Notifications extends React.Component {
    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always' }} style={styles.flex}>
                <Header
                    svgNameL="leftArrow"
                    svgNameR="cart"
                    headingTitle="Notifications"
                    navigationObj={this.props.navigation}
                />
                <View style={styles.height90}>
                    {/* Added border bottom cuz some unknown scrollview issue causes last element last pixel row to not show. */}
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContainer}
                    >
                        {notificationsData.map((notification, ind) => (
                            <NotificationCard
                                key={ind}
                                onNextPress={this.on_next_press}
                                notifcationImg={notification.notifcationImg}
                                notificationText={notification.notificationText}
                                notificationLink={notification.notificationLink}
                            />
                        ))}
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Notifications;
