import '../node_modules/@pyxeldev/reset-css/reset.min.css';
import '../styles/index.scss';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Biorhythm</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-host="https://myanalytics.dev" data-dnt="false" src="https://myanalytics.dev/js/script.js" id="ZwSg9rf6GA" async defer></script>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
