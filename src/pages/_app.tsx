import Head from 'next/head';
import { AppProps } from 'next/app';
import './styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nx Template</title>
      </Head>
      <div data-automation-id="theme-toggle">
        {/* <main className="app"> */}
        <Component {...pageProps} />
        {/* </main> */}
      </div>
    </>
  );
}
