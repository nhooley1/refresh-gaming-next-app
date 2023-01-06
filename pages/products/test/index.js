// pages/products/index.js
import React from 'react';
import Link from 'next/link';
import { getProducts } from '../../api/products';
import Product from '../../../components/Product';
import styles from './index.module.css';

function AllTestPage({ products }) {
  console.log(products);

  let url = '';

  products.map((product) => {
    console.log(product.fields.title);
    console.log(product.fields.description);
    console.log(product.fields.id);
    console.log(product.fields.inStock);
    console.log(product.fields.price);
    console.log(product.fields.title);
    product.fields.image.map((image) => {
      console.log(image.fields.file.url);
      url = image.fields.file.url;
    });
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <Link
            href="/products/[id]"
            as={`/products/${product.fields.id}`}
            key={product.fields.id}
          >
            <div className={styles.product}>
              <Product {...product.fields} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch the products from the api
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}

export default AllTestPage;
