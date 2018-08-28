import Head from 'next/head'

export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
    </Head>
    <style jsx global>{`
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
