import Link from "next/link";


const blogs = [
  { id: 1, title: "Dhoni", content: "Wicket keepre" },
  { id: 2, title: "Virat", content: "Right hand Batsman" },
  { id: 3, title: "Jadeja", content: "All Rounder" }
];

export default async function BlogDetail({ params }: any) {

  const { comtent } = await params;   

  const id = parseInt(comtent);

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }

  return (
    <div>
      <h1>Name : {blog.title}</h1>
      <p>Roal : {blog.content}</p>
      <Link href="/blog" className="block text-blue-600 underline">Back</Link>
    </div>
  );
}