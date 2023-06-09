import Head from "next/head";
import Header from "@/components/layout/Header";
import HomeSearchBar from "@/components/layout/HomeSearchBar";
import Languages from "@/components/layout/Languages";
import Logo from "@/components/layout/Logo";
import HomeFooter from "@/components/layout/HomeFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Discover the World with goSearch - Your Ultimate Search Engine
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
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
      <main className="w-screen text-gray-700 min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Header />
        <Logo />
        <div className="">
          <HomeSearchBar />
        </div>
        <Languages />
        <HomeFooter />
      </main>
    </>
  );
}
