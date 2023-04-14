import React from 'react';
import * as Font from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import { LogBox } from 'react-native';
import AppContainer from './src/routes';
import { colors } from './src/utils/colors';
import {Text} from 'react-native'
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
console.disableYellowBox = true;
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Poppins-Regular': require('./src/assets/font/Poppins/Poppins-Regular.ttf'),
            'Poppins-Bold': require('./src/assets/font/Poppins/Poppins-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.state.fontLoaded) {
            return (
                <AppContainer />
            );
        } return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.greenColor} />                
          </View>
        );
    }
}
