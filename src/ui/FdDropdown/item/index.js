import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Button } from 'react-native-material-buttons';
import styles from './styles';

export default class DropdownItem extends PureComponent {
  static defaultProps = {
      color: 'transparent',
      disabledColor: 'transparent',
      rippleContainerBorderRadius: 0,
      shadeBorderRadius: 0,
  };

//   static propTypes = {
//       ...Button.propTypes,

//       index: PropTypes.number.isRequired,
//   };

  constructor(props) {
      super(props);

      this.onPress = this.onPress.bind(this);
  }

  onPress() {
      const { onPress, index } = this.props;

      if (typeof onPress === 'function') {
          onPress(index);
      }
  }

  render() {
      const {
          children, style, index, ...props
      } = this.props;

      return (
        <Button
            {...props}

            style={[styles.container, style]}
            onPress={this.onPress}
          >
            {children}
          </Button>
      );
  }
}
