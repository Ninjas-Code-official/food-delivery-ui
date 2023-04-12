import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';

class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this.bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    bootstrapAsync = async () => {
        // const userToken = await AsyncStorage.getItem('userToken');
        // userToken ? this.props.googleAuth(JSON.parse(userToken)) : null
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // for testing purpose
        this.props.navigation.navigate('Tutorial');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }
}

export default (AuthLoading);
