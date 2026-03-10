export type Product = {
  id: number;
  name: string;
  price: number;
  default_code: string | null;
};

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:3000/products');

  if (!response.ok) {
    throw new Error('Error obteniendo productos');
  }

  return response.json();
}