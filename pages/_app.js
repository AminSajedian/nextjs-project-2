import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Layout from "../components/Layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <main className={`${montserrat.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
