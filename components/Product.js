import React from 'react';
import styles from './Product.module.css';

function Product({ image, name, price, description }) {
  return (
    <div>
      <img className={styles.image} src={image} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <h3 className={styles.price}>{price}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Product;
