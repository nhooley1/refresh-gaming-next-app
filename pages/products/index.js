import React from 'react';
import Link from 'next/link';
import { getProducts } from '../api/getProducts';
import Product from '../../components/Product';
import styles from './index.module.css';

function AllProductsPage({ products }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <Link
            href="/products/[id]"
            as={`/products/${product.id}`}
            key={product.id}
          >
            <div className={styles.product}>
              <Product {...product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = getProducts();

  return {
    props: {
      products,
    },
  };
}

export default AllProductsPage;
