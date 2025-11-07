import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document component
 * Customizes the HTML document structure
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
