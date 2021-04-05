import "../styles/globals.css";
import PostsContextProvider from "../contexts/PostsContext";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <PostsContextProvider>
      <Head>
        <title>nextjs-datafetch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostsContextProvider>
  );
}

export default MyApp;
