import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogPostsByCSR() {
  const [blogPosts, setBlogPosts] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("process.env.NEXT_PUBLIC_BE_API_URL: ", process.env.NEXT_PUBLIC_BE_API_URL);
    // console.log("process.env.BE_API_URL: ", process.env.BE_API_URL);
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_BE_API_URL}/api/blog-posts`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        console.log("blogPosts: ", data);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!blogPosts) return <p>No blog Posts</p>;

  return (
    <>
      <Head>{/* <title>Blog Listing App</title> */}</Head>
      <main>
        <h1>Blog Posts by CSR (Client-side rendering)</h1>
        <br />
        {blogPosts.map((blogPost, index) => (
          <Link
            href={`/blog-posts-by-csr/details?blogPostId=${blogPost.id}`}
            key={`blogPost-${index}`}
          >
            <div
              style={{
                textDecoration: "none",
                border: "solid black 2px",
                display: "inline-block",
                margin: "5px",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              <div>Title: {blogPost.title}</div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
