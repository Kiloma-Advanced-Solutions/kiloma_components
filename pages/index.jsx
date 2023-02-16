import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.img_title}>
        <Image src="\Images\logo.svg" width={100} height={100} />
        <p>Kiloma Components</p>
      </div>
      <div className={styles.img_div}>
        <Image
          src="\Images\library.svg"
          fill="true"
          className={styles.lower_img}
        />
      </div>
      <div className={styles.button_div}>
        <Link className={styles.button} href="/demo_page">
          Browse
        </Link>
      </div>
    </div>
  );
}
