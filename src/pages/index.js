import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/pages/Header";
import Image from "next/image";
import Footer from "@/pages/Footer";
import SearchInput from "@/pages/SearchInput";
import Languages from "./Languages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Discover the World with goSearch - Your Ultimate Search Engine
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Looking for a fast and reliable search engine? Look no further than goSeache.com! Our advanced algorithms deliver accurate and relevant results in seconds. Whether you’re searching for the latest news, shopping deals, or travel destinations, goSeache.com has you covered. Start exploring the world with us today!"
        />
        <meta
          name="keywords"
          content="search engine, fast, reliable, advanced algorithms, accurate results, relevant results, latest news, shopping deals, travel destinations"
        />
        <meta name="author" content="Tahir Patel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-screen text-gray-700 bg-white dark:bg-gray-700 dark:text-white">
        <Header />
        <div className="container">
          <SearchInput />
        </div>
        <Languages />
        <Footer />
      </div>
    </>
  );
}