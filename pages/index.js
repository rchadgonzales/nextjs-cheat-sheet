import { server } from "../config";
// import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      {/* <Head>
        <title>Server Side Rendering</title>
        <meta name="keywords" content="web development, programming" />
      </Head> */}
      {/* <h1>Welcome to Next.js</h1> */}
      {/* {articles.map((article) => (
        <h3>{article.title}</h3>
      ))} */}
      <ArticleList articles={articles} />
    </div>
  );
}

/*
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=7`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
*/

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
