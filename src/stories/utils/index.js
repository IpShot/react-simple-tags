import React from 'react';
import style from './style.css';

export const Container = ({
  children,
}) => (
  <div className={style.container}>
    {children}
  </div>
);
