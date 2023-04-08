import Head from "next/head";
// import Link from "next/link";

export default function Home() {
  // process.env.BE_API_URL will not be exposed to the browser (not consoleLogable)
  // process.env.BE_API_URL will be exposed to the server
  // console.log("process.env.BE_API_URL: ", process.env.BE_API_URL);

  // process.env.NEXT_PUBLIC_BE_API_URL will be exposed to the browser (consoleLogable) because of NEXT_PUBLIC
  // process.env.NEXT_PUBLIC_BE_API_URL will be exposed to the server
  // console.log("process.env.NEXT_PUBLIC_BE_API_URL: ", process.env.NEXT_PUBLIC_BE_API_URL);
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <main>
        <h1>Home Page</h1>
        <div>
          <p>
            There are two different ways to render &quot;Blog Posts&quot;: <br />
            1- Blog Posts by SSR (Server-side rendering) <br />
            2- Blog Posts by SSG (Static-site generation) <br />
            3- Blog Posts by SSG (Static-site generation) and ISR (Incremental
            Static Regeneration) <br />
            4- Blog Posts by CSR (Client-side rendering) <br />
          </p>
          <p>
            Choose one of them from the navbar and see the differnce on the
            terminal of Backend App
          </p>
        </div>
      </main>
    </>
  );
}
