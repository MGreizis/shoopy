import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "./components/header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shoopy</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        
      </main>
    </>
  );
};

export default Home;
