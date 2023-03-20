import Head from "next/head";
// import Link from "next/link";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <main>
        <h1>Home Page</h1>
        <p>
          There are two different ways to render &quot;Blog Posts&quot;: <br />
          1- Blog Posts by SSR (Server-side rendering) <br />
          2- Blog Posts by SSG (Static-site generation) <br />
          3- Blog Posts by SSG (Static-site generation) and ISR (Incremental
          Static Regeneration) <br />
          Choose one of them from the navbar and see the differnce on the
          terminal of Backend App
        </p>
      </main>
    </>
  );
}
