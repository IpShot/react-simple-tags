import React from 'react';
import styles from './styles';

export const Container = ({
  children,
}) => (
  <div style={styles.container}>
    {children}
  </div>
);
