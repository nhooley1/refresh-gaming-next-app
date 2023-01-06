import fs from 'fs';
import path from 'path';

export function getProduct(id) {
  const productsFilePath = path.join(
    process.cwd(),
    'pages',
    'api',
    'products.json'
  );

  // Read the products.json file
  const productsFile = fs.readFileSync(productsFilePath, 'utf-8');

  // Parse the JSON data
  const products = JSON.parse(productsFile);

  // Find the product with the matching id
  const product = products.find((p) => p.id === id);

  // Return the product or null if not found
  return product || null;
}
