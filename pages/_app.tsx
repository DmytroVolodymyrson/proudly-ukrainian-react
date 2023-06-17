import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Layout from "../components/layout";
import "../public/css/globals.css";

const MyApp = ({ Component, pageProps }: any) => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="/images/favicons/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preload" href="../public/fonts/NAMU-1910.woff2" as="font" type="font/woff2" crossOrigin={'anonymous'} />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default appWithTranslation(MyApp);
