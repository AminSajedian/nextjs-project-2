import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    "https://msajedian-bug-free-waddle-w445qvx975wcjxw-8080.preview.app.github.dev/api/blog-posts"
  );
  const data = await res.json();

  return {
    props: {
      blogPosts: data,
    },
  };
}

export default function BlogPostsBySSG({ blogPosts }) {
  // console.log(blogPosts);
  return (
    <>
      <Head>
        {/* <title>Blog Posts by SSG (Static-site generation)</title> */}
        {/* <meta name="description" content="Blog Listing App" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <h1>Blog Posts by SSG (Static-site generation)</h1>
        <br />
        {blogPosts.map((blogPost, index) => (
          <Link
            href={`/blog-posts-by-ssg/${blogPost.id}`}
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
              <div>Blog Title: {blogPost.title}</div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
