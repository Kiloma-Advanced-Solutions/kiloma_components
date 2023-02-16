import React from 'react';
import styles from './Button.module.css';

function Button() {
  return (
    <button type="button" className={styles.button}> Click</button>
  );
}

export default Button;