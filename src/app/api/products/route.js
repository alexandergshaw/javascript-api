export async function GET(request) {
  const products = [
    { id: 1, name: "Blue Hoodie", price: 49.99, in_stock: true },
    { id: 2, name: "Red Hoodie", price: 44.99, in_stock: false },
    { id: 3, name: "Black Cap", price: 19.99, in_stock: true },
  ];

  return Response.json({ products });
}

export async function POST(request) {
  const newProduct = await request.json();
  return Response.json({ message: "Product created (mock)", product: newProduct }, { status: 201 });
}
