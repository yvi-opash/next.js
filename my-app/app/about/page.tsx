import Link from 'next/link'

export const metadata = {
  title: "1111111111",
  description: "Learn more about our company, mission, and team.",
  keywords: ["about us", "company", "nextjs site"],
  openGraph: {
    title: "11111111",
    description: "Learn more about our company",
    url: "https://123.com/about",
    siteName: "My Website",
    type: "website",
  },
}

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Aboutdfdsfgd Page</h1>
      <p className="text-lg mb-6">This is the about page</p>
      <Link href="/" className="text-blue-600 underline">Back to Home</Link>
    </main>
  )
}