import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.BE_API_URL}/api/blog-posts`
  );
  const data = await res.json();

  return {
    props: {
      blogPosts: data,
    },
    revalidate: 10,
  };
}

export default function BlogPostsBySSGAndISR({ blogPosts }) {
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
        <h1>
          Blog Posts by SSG (Static-site generation) and ISR (Incremental Static
          Regeneration)
        </h1>
        <br />
        {blogPosts.map((blogPost, index) => (
          <Link
            href={`/blog-posts-by-ssg-and-isr/${blogPost.id}`}
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
              <div>Blog Body: {blogPost.body}</div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
