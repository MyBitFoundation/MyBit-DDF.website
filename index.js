import Head from 'next/head'

export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
      <link rel='stylesheet' href='/static/font.css' />
            <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/static/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/static/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/static/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/static/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/static/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/static/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/manifest.json" />
      <meta
        name="description"
        content="Contribute to open source projects and get rewarded."
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/static/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@MyBit_DApp" />
      <meta name="twitter:title" content="MyBit" />
      <meta
        name="twitter:description"
        content="Contribute to open source projects and get rewarded."
      />
      <meta name="twitter:creator" content="@MyBit_DApp" />
      <meta
        name="twitter:image"
        content="https://files.mybit.io/social/mybit_twitter_cover.png"
      />

      <meta property="og:title" content="MyBit" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://mybit.io/" />
      <meta
        property="og:image"
        content="https://files.mybit.io/social/mybit_facebook_cover.png"
      />
      <meta
        property="og:description"
        content="The MyBit Decentralised Development Fund (DDF) is an investment fund that is tied to the development of MyBit Foundation products."
      />
      <meta property="og:site_name" content="MyBit" />
      <title>MyBit DDF</title>
    </Head>
    {children}
  </div>
