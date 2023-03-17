export async function getServerSideProps(props) {
  // console.log("props.query.blogPostId: ", props.query.blogPostId);
  const blogPostId = props.query.blogPostId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${blogPostId}`
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
        <div>Name: {blogPost.name}</div>
        <div>Username: {blogPost.username}</div>
        <div>Email: {blogPost.email}</div>
        <div>City: {blogPost.address.city}</div>
      </div>
    </>
  );
}
