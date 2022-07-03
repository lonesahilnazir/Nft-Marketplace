import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <title>NFT Marketplace</title>
        <link rel="icon" href="/assets/logo.svg" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <body className="bg-[#1C121F] font-workSans">
        <Header />
        <main>
          <Hero />
        </main>
      </body>
    </html>
  );
}
