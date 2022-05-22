import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>James Ryan</title>
        <meta
          name="description"
          content="A page's description, usually one or two sentences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="wrap">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
