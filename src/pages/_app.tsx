import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS, Sass and CSS modules"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
