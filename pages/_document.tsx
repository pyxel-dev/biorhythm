import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../utils/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            data-host="https://myanalytics.dev"
            data-dnt="false"
            src="https://myanalytics.dev/js/script.js"
            id="ZwSg9rf6GA"
            async
            defer
          ></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
