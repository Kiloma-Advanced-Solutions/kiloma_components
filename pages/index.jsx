import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kiloma Components</title>
        <link rel="icon" href="Images/logo.svg" />
      </Head>
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
        <Link className={styles.button} href="/components">
          Browse
        </Link>
      </div>
    </div>
  );
}
