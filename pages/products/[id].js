import { getProducts } from '../api/products';
import { getProduct } from '../api/products';
import { useState } from 'react';
import Head from 'next/head';
import { loadStripe } from '@stripe/stripe-js';
import Product from '../../components/Product';
import { useEffect } from 'react';
import Basket from '../../components/basket/basket';

export async function getStaticPaths() {
  // Fetch the list of all products
  const products = await getProducts();

  // Create a list of paths for all products
  const paths = products.map((product) => ({
    params: {
      id: product.fields.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch the product with the specified id
  const product = await getProduct(params.id);

  return {
    props: {
      product,
    },
  };
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function ProductPage({ product }) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  return (
    <>
      <Basket />
      <Product {...product.fields} />
      <form action="/api/checkout_sessions" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 400px;
              height: 112px;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              height: 36px;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form>
    </>
  );
}
