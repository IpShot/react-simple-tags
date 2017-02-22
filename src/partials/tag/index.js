import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import X from './close-btn';
import style from './style.css';


class Tag extends Component {

  handleCloseClick = () => {
    const { onClose, children } = this.props;
    onClose(children);
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={cn(style.tag, className.tag)}>
        {children}
        <X
          className={className.close}
          onClick={this.handleCloseClick}
        />
      </div>
    );
  }
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.object,
  onClose: PropTypes.func,
};

Tag.defaultProps = {
  className: {},
  onClose: () => null,
};

export default Tag;
