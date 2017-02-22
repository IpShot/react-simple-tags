import React, { PropTypes } from 'react';
import cn from 'classnames';
import style from './style.css';


const X = ({
  className,
  onClick,
}) => (
  <span 
    className={cn(style.btn, className)}
    onClick={onClick}
  >
    &#215;
  </span>
);

X.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

X.defaultProps = {
  className: '',
  onClick: () => null,
};

export default X;
