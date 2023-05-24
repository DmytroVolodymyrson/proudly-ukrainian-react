import { appWithTranslation } from "next-i18next";
import Layout from "../components/layout";
import "../public/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(MyApp);
