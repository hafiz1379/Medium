import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts from "./components/Posts";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts)
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Posts />
    </div>
  );
}
