import React, { PropTypes } from 'react';
import styles from './styles';


const X = ({
  onClick,
  style,
}) => (
  <span 
    style={{ ...styles.close, ...style }}
    onClick={onClick}
  >
    &#215;
  </span>
);

X.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
};

X.defaultProps = {
  onClick: () => null,
  style: {},
};

export default X;
