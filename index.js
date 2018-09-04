import Head from 'next/head'

export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <style jsx global>{`
      @font-face {
          font-family: 'Gilroy';
          src: url('static/gilroy-extrabold.otf') format('opentype');
          font-weight: bold;
      }

      body {
        font-family: 'Roboto', sans-serif;
        -moz-font-feature-settings: 'kern';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      [class^="ant-"]{
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
    {children}
  </div>
