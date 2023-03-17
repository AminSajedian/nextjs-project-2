import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Blog Post App" />
        {/* 
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
        <meta
          property="og:description"
          content="See pictures from Next.js Conf and the After Party."
        />
        <meta property="og:title" content="Next.js Conf 2022 Pictures" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next.js Conf 2022 Pictures" />
        <meta
          name="twitter:description"
          content="See pictures from Next.js Conf and the After Party."
        />
       */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
