import { createClient } from 'contentful';

const client = createClient({
  space: 'u2h85whkuvwv',
  accessToken: 'r6GLtMrRlTFS8dsN64hPIbTj-ej04RdHMzu0mdgX9S8',
});

export async function getProducts() {
  const response = await client.getEntries({
    content_type: 'product',
  });
  return response.items;
}

// export async function getProduct(id) {
//   console.log('this is the id');
//   console.log(id);

//   const response = await client.getEntry(id);
//   return response;
// }

export async function getProduct(id) {
  const response = await client.getEntries({
    content_type: 'product',
    'fields.id': id,
  });
  return response.items[0];
}
