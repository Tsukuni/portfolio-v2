import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>tsukuni kenta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <footer className={styles.footer}>
        © 2021 Tsukuni
      </footer>
    </div>
  );
};