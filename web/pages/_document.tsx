import React, { useEffect } from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";
import globalStyles from "../styles/globalStyles";

export default function Document() {
  useEffect(() => {
    {
      globalStyles();
    }
  }, []);

  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
