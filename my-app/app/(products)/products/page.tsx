import Link from 'next/link'

export default function Products() {
  const items = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <Link 
              href={`/products/${item.id}`}
              className="text-blue-600 text-lg underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="text-blue-600 block mt-6 underline">Back to Home</Link>
    </main>
  )
}