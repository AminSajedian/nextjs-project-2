export async function getStaticPaths() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
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
    fallback: "blocking",
    // { fallback: false } means other routes should 404.
    // { fallback: "blocking" } means other routes should 404.
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      blogPost: data,
    },
    revalidate: 10,
  };
}

export default function DetailsBySSGAndISR({ blogPost }) {
  // console.log(blogPost);
  return (
    <>
      <h1>
        Blog Post Details by SSG (Static-site generation) and ISR (Incremental
        Static Regeneration)
      </h1>
      <br />
      <div>
        <div>Blog Title: {blogPost.blogTitle}</div>
        <div>Blog Type: {blogPost.blog_type.blogType}</div>
        <div>City: {blogPost.blog_location.city}</div>
        <div>blog Description: {blogPost.blogDescription}</div>
      </div>
    </>
  );
}
