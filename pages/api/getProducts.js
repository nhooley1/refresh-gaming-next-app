import fs from 'fs';
import path from 'path';

export function getProducts() {
  const productsFilePath = path.join(
    process.cwd(),
    'pages',
    'api',
    'products.json'
  );
  const productsFile = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(productsFile);
}
