// import { getProduct } from '../api/getProduct';
// import { getProducts } from '../api/getProducts';

import { getProducts } from '../api/products';
import { getProduct } from '../api/products';

import Product from '../../components/Product';

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

export default function ProductPage({ product }) {
  console.log(product);
  return <Product {...product.fields} />;
}
