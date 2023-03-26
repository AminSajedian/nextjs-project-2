export async function getServerSideProps(props) {
  // console.log("props.query.blogPostId: ", props.query.blogPostId);
  const blogPostId = props.query.blogPostId;
  const res = await fetch(
    `${process.env.BE_API_URL}/api/blog-posts/${blogPostId}`
  );
  const data = await res.json();

  return {
    props: {
      blogPost: data,
    },
  };
}

export default function DetailsBySSR({ blogPost }) {
  // console.log(blogPost);

  return (
    <>
      <h1>Blog Post Details by SSR (Server-side rendering)</h1>
      <br />
      <div>
        <div>Blog Title: {blogPost.title}</div>
        <div>Blog Body: {blogPost.body}</div>
      </div>
    </>
  );
}
