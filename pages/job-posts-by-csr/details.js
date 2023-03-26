import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function DetailsByCSR() {
  const router = useRouter();
  const [jobPost, setJobPost] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const jobPostId = router.query.jobPostId;
  // console.log("router.query.jobPostId: ", router.query.jobPostId);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_BE_API_URL}/api/job-posts/active-job-posts/${jobPostId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobPost(data);
        // console.log("jobPost: ", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!jobPost) return <p>No jobPost</p>;

  return (
    <>
      <h1>Job Post Details by CSR (Client-side rendering)</h1>
      <br />
      <div>
        <div>Job Title: {jobPost.jobTitle}</div>
        <div>Job Type: {jobPost.job_type.jobType}</div>
        <div>City: {jobPost.job_location.city}</div>
        <div>job Description: {jobPost.jobDescription}</div>
      </div>
    </>
  );
}
