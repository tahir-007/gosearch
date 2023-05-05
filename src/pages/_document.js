import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-gray-900">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var theme;
                  try {
                    theme = localStorage.getItem('color-theme');
                  } catch (err) {}
                  var isDarkMode = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDarkMode) document.documentElement.classList.add('dark');
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
