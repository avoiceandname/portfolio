import Head from "next/head";

import Main from "../src/Main";
export default function Home() {
  return (
    <div className="text-black bg-white">
      <Head>
        <title>Kat Miller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
