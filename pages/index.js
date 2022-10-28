import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-white bg-black">
      <NextSeo
        title="Kat Miller"
        description="Kat Miller: Unexpected Joy"
        canonical="https://nine4-1.vercel.app/"
        openGraph={{
          url: "https://nine4-1.vercel.app/",
        }}
      />
      <Head>
        <title>Kat Miller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
