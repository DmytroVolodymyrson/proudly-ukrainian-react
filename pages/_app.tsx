import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import Layout from "../components/layout";
import "../public/css/globals.css";

const MyApp = ({ Component, pageProps }: any) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default appWithTranslation(MyApp);
