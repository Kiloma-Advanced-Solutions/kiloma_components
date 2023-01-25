import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.inside_div}>
        <div className={styles.img_title}>
          <Image src='/images/logo.svg' width={100} height={100} />
          <p>Kiloma Components</p>
        </div>
        <div className={styles.button_div}>
          <button type='button' className={styles.button}>
            Browse
          </button>
        </div>
      </div>
      <div className={styles.img_div}>
        <Image
          src='\Images\library.svg'
          width={300}
          height={400}
          className={styles.lower_img}
        />
      </div>
    </div>
  );
}
