import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const images = {
    breakfast_img: require('../../assets/images/tutorial_1.png'),
    drinks_img: require('../../assets/images/tutorial_2.png'),
    icecream_img: require('../../assets/images/tutorial_3.png'),
};

class TutorialItem extends Component {
    constructor(props) {
        super(props);
        this.img = null;
        this.grad = null;
        if (props.page == '0') {
            this.img = images.breakfast_img;
        } else if (props.page == '1') {
            this.img = images.drinks_img;
        } else if (props.page == '2') {
            this.img = images.icecream_img;
        }
    }

    render=() => (
        <View style={[styles.container]}>
        <View style={[styles.backgroundGradient, { backgroundColor: this.props.bcolor }]} />

        <View style={[styles.container_top]}>
            <View style={[styles.heading_container]}>
            <Text style={[styles.heading_container_s1]}>
                      { this.props.heading_1 ? this.props.heading_1 : 'NA'}
                    </Text>
            <Text style={[styles.heading_container_s2]}>
                      { this.props.heading_2 ? this.props.heading_2 : 'NA'}
                    </Text>
                </View>

            <Image
                  style={[styles.image]}
                  source={this.img}
                />
            </View>


        <View style={[styles.container_bot]}>
              <Text style={[styles.decription]}>
                  {this.props.description}
                </Text>

              <TouchableOpacity activeOpacity={0.2} onPress={this.props.on_press_event} style={[styles.main_btn]}>
                  <Text style={[styles.main_btn_text]}> Get Started! </Text>
                </TouchableOpacity>
            </View>

      </View>
    )
}

export default TutorialItem;
