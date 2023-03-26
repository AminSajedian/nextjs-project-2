import Head from "next/head";
import Link from "next/link";

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.BE_API_URL}/api/blog-posts`
  );
  const data = await res.json();
  // console.log(data);
  // Pass data to the page via props
  return { props: { blogPosts: data } };
}

export default function BlogPostsBySSR(props) {
  // console.log(props);
  const { blogPosts } = props;
  return (
    <>
      <Head>{/* <title>Blog Listing App</title> */}</Head>
      <main>
        <h1>Blog Posts by SSR (Server-side rendering)</h1>
        <br />
        {blogPosts.map((blogPost, index) => (
          <Link
            href={`/blog-posts-by-ssr/details?blogPostId=${blogPost.id}`}
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
