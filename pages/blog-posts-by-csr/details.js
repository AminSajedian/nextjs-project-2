import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function DetailsByCSR() {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const blogPostId = router.query.blogPostId;
  // console.log("router.query.blogPostId: ", router.query.blogPostId);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_BE_API_URL}/api/blog-posts/${blogPostId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogPost(data);
        // console.log("blogPost: ", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!blogPost) return <p>No blog Post</p>;

  return (
    <>
      <h1>Blog Post Details by CSR (Client-side rendering)</h1>
      <br />
      <div>
        <div>Blog Title: {blogPost.title}</div>
        <div>Blog Body: {blogPost.body}</div>
      </div>
    </>
  );
}
