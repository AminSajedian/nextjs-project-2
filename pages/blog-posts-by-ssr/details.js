export async function getServerSideProps(props) {
  // console.log("props.query.blogPostId: ", props.query.blogPostId);
  const blogPostId = props.query.blogPostId;
  const res = await fetch(
    `https://msajedian-bug-free-waddle-w445qvx975wcjxw-8080.preview.app.github.dev/api/blog-posts/${blogPostId}`
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
