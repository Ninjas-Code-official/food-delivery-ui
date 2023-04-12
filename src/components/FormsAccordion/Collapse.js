import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import CollapseBody from './CollapseBody';
import CollapseHeader from './CollapseHeader';
import RadioButton from '../../ui/FdRadioBtn/RadioBtn';
import { colors } from '../../utils/colors';

type Props = {
    isCollapsed: ?boolean,
    disabled: ?boolean,
    onToggle: ?Function,
    handleLongPress: ?Function
};

export default class Collapse extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.isCollapsed,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.isCollapsed,
        });
    }

    __toggle() {
        this.setState({
            show: !this.state.show,
        }, () => this.props.onToggle(this.state.show));
    }

    render() {
        let header = null;
        let body = null;
        const handleLongPressCallback = this.props.handleLongPress;
        React.Children.forEach(this.props.children, (child) => {
            if (child.type === CollapseHeader) {
                header = (
                  <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            borderWidth: 1,
                            borderColor: colors.fontGreyColor,
                        }}
                      disabled={this.props.disabled} onPress={() => this.__toggle()} onLongPress={handleLongPressCallback}
                    >
                      <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                          <RadioButton
                          animation="bounceIn"
                          isSelected={this.state.show}
                          onPress={() => this.__toggle()}
                        />
                        </View>
                      <View style={{ width: '80%' }}>
                          {child}
                        </View>
                    </TouchableOpacity>
                );
            } else if (child.type === CollapseBody) {
                if (this.state.show) {
                    body = child;
                }
            }
        });

        if (header === null) {
            console.warn("header wasn't found to be rendered. Please make sure you have wrapped an CollapseHeader in the Collapse Component.");
            return null;
        }
        return (
          <View {...this.props} style={{ marginBottom: 30 }}>
                {header}
                {body}
            </View>
        );
    }
}

Collapse.defaultProps = {
    isCollapsed: false,
    disabled: false,
    onToggle: () => undefined,
    handleLongPress: undefined,
};
