// import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <h1>Blog Post App</h1>
      <Link href="/">Home Page</Link>
      <span> | </span>
      <Link href="/blog-posts-by-ssr">
        Blog Posts by SSR (Server-side rendering)
      </Link>
      <span> | </span>
      <Link href="/blog-posts-by-ssg">
        Blog Posts by SSG (Static-site generation)
      </Link>
      <span> | </span>
      <Link href="/blog-posts-by-ssg-and-isr">
        Blog Posts by SSG (Static-site generation) and ISR (Incremental Static
        Regeneration)
      </Link>
      <span> | </span>
      <Link href="/blog-posts-by-csr">
        Blog Posts by CSR (Client-side rendering)
      </Link>
      <br />
      <br />
      <button type="button" onClick={() => router.back()}>
        Go back
      </button>
      <hr />
    </nav>
  );
}
