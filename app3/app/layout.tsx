import Link from "next/link";

export const metadata = {
  title: "Users Directory",
};

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link href="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link href="/users">users</Link>
        </nav>

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}