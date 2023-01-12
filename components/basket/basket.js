import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Basket.module.css';

const Basket = () => {
  const [shippingCost, setShippingCost] = useState(5);
  const products = useSelector((state) => state.basket.products);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    // Dispatch the REMOVE_PRODUCT action to remove the product from the basket
    dispatch({
      type: 'REMOVE_PRODUCT',
      productId,
    });
  };

  return (
    <div className={styles.basketContainer}>
      <h1 className={styles.title}>Basket</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length ? (
              products.map((product) => (
                <tr key={product.id} className={styles.tableRow}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className={styles.removeButton}
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No items in your basket</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Basket;
