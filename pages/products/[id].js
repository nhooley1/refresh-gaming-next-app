import { getProduct } from '../api/getProduct';
import { getProducts } from '../api/getProducts';

import Product from '../../components/Product';

export async function getStaticPaths() {
  // Fetch the list of all products
  const products = getProducts();

  // Create a list of paths for all products
  const paths = products.map((product) => ({
    params: {
      id: product.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch the product with the specified id
  const product = getProduct(params.id);

  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  return <Product {...product} />;
}
