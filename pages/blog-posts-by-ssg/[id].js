export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.BE_API_URL}/api/blog-posts`
  );
  const data = await res.json();

  // Get the paths we want to pre-render based on blogPosts
  const paths = data.map((blogPost) => {
    return {
      params: { id: blogPost.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
    // { fallback: false } means other routes should 404.
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.BE_API_URL}/api/blog-posts/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      blogPost: data,
    },
  };
}

export default function DetailsBySSG({ blogPost }) {
  // console.log(blogPost);

  return (
    <>
      <h1>Blog Post Details by SSG (Static-site generation)</h1>
      <br />
      <div>
        <div>Blog Title: {blogPost.title}</div>
        <div>Blog Body: {blogPost.body}</div>
      </div>
    </>
  );
}
