import React from 'react';
import styles from './Product.module.css';

function Product({ image, title, price, description, instock, id }) {
  let img = image[0].fields.file.url;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt={title} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
      <p className={styles.availability}>
        {instock ? 'In stock' : 'Out of stock'}
      </p>
    </div>
  );
}

export default Product;
