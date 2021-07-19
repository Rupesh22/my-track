import { Provider } from "next-auth/client";

import "../styles/styles.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
