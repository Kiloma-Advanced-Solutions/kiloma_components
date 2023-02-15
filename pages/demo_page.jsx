import React from 'react';
import styles from '../styles/Demo_page.module.css';

export default function demoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Components</h1>
      </div>
      <div className={styles.sub_title}>
        <h2>Input Components</h2>
      </div>
    </div>
  );
}
