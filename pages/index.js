import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavigationBar from '../components/layout/NavigationBar';
import styles from './index.module.css';

function Home() {
  return (
    <>
      <NavigationBar />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to our online store!</h1>
        <h2 className={styles.subtitle}>
          Shop the latest trends in fashion and home decor
        </h2>
        <Link href="/categories">
          <button className={styles.button}>Browse Categories</button>
        </Link>
        <Link href="/products">
          <button className={styles.button}>View All Products</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
