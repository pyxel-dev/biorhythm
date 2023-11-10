import Head from "next/head";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider } from "react-redux";
import store from "../store/store";
import "../node_modules/@pyxeldev/reset-css/reset.min.css";
import "../styles/index.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Biorhythm</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          id="myownstats"
          data-myownstats-id="biorhythm"
          src="https://myownstats.com/tag.js"
          async
          defer
        ></script>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
