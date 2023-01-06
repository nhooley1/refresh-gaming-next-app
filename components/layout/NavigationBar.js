import React from 'react';
import Link from 'next/link';
import styles from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img className={styles.logo} src="/refresh-logo.png" alt="Logo" />
      </Link>
      <div className={styles.options}>
        <Link href="/about" className={styles.option}>
          About
        </Link>
        <Link href="/products" className={styles.option}>
          Products
        </Link>
        <Link href="/contact" className={styles.option}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
