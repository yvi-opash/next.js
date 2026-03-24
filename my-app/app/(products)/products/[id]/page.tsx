import Link from 'next/link'

export default function ProductDetail({ 
  params 
}: { 
  params: { id: string } 
}) {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Product {params.id}</h1>
      <p className="text-lg mb-6">This is product #{params.id} details</p>
      
      <div className="space-y-3">
        <Link href="/products" className="block text-blue-600 underline">Back to Products</Link>
        <Link href="/" className="block text-blue-600 underline">Back to Home</Link>
      </div>
    </main>
  )
}