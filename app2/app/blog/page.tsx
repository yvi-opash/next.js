import Link from "next/link";

const blogs = [
  { id: 1, title: "Dhoni" },
  { id: 2, title: "Virat" },
  { id: 3, title: "Jadeja" }
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
<Link href="/" className="block text-blue-600 underline">home</Link>
      {blogs.map((blog) => (
        
        <div key={blog.id}>
          <Link href={`/blog/${blog.id}`} >
            {blog.title}
          </Link>

          
        </div>
      ))}
    </div>
  );
}