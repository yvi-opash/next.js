import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome Home</h1>
      <p className="text-lg mb-6">This is the homepage</p>
      
      <Image 
        src="/next.svg" 
        alt="Next.js logo" 
        width={200} 
        height={100}
      />
      
      <div className="mt-6 space-y-3">
        <Link href="/about" className="block text-blue-600 underline">Go to About</Link>
        <Link href="/products" className="block text-blue-600 underline">View Products</Link>
      </div>
    </main>
  )
}