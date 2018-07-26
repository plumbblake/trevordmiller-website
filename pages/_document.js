import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { injectGlobal, ServerStyleSheet } from "styled-components";
import globalStyles from "utils/globalStyles";

injectGlobal`
  ${globalStyles}
`;

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="en">
        <Head>{styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
