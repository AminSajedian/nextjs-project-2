import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function JobPostsByCSR() {
  const [jobPosts, setJobPosts] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("process.env.NEXT_PUBLIC_BE_API_URL: ", process.env.NEXT_PUBLIC_BE_API_URL);
    // console.log("process.env.BE_API_URL: ", process.env.BE_API_URL);
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_BE_API_URL}/api/job-posts/active-job-posts`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobPosts(data);
        console.log("jobPosts: ", data);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!jobPosts) return <p>No jobPosts</p>;

  return (
    <>
      <Head>{/* <title>Job Listing App</title> */}</Head>
      <main>
        <h1>Job Posts by CSR (Client-side rendering)</h1>
        <br />
        {jobPosts.map((jobPost, index) => (
          <Link
            href={`/development/job-posts-by-csr/details?jobPostId=${jobPost.id}`}
            key={`jobPost-${index}`}
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
              <div>Job Title: {jobPost.jobTitle}</div>
              <div>Job Type: {jobPost.job_type.jobType}</div>
              <div>City: {jobPost.job_location.city}</div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
