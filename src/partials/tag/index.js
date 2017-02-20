import React, { Component, PropTypes } from 'react';
import styles from './styles';


class Tag extends Component {

  handleCloseClick() {
    const { onClose, children } = this.props;
    onClose(children);
  }

  render() {
    const { children, style } = this.props;
    return (
      <div style={{ ...styles.tag, ...style }}>
        {children}
      </div>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  style: PropTypes.object,
};

Tag.defaultProps = {
  onClose: () => null,
  style: {},
};

export default Tag;
