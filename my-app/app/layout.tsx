import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'My App',
  description: 'Simple Next.js App',
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-6 p-4 bg-blue-500 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}