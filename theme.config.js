export default {
  github: 'https://github.com/tangly1024/nextjs-docs-notion-next',
  docsRepositoryBase: 'https://github.com/tangly1024/nextjs-docs-notion-next/blob/master',
  titleSuffix: ' – NotionNext',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">NotionNext</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        基于 Next.js 的Notion博客站点生成器
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="NotionNext: 基于Next.js 的Notion博客站点生成器" />
      <meta name="og:description" content="NotionNext: 基于Next.js 的Notion博客站点生成器" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.tangly1024.com/og.png" />
      <meta name="twitter:site:domain" content="docs.tangly1024.com" />
      <meta name="twitter:url" content="https://docs.tangly1024.com" />
      <meta name="og:title" content="NotionNext: 基于Next.js 的Notion博客站点生成器" />
      <meta name="og:image" content="https://docs.tangly1024.com/og.png" />
      <meta name="apple-mobile-web-app-title" content="NotionNext" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © <a href='https://nextra.vercel.app'>Nextra.</a></>,
  unstable_faviconGlyph: '👋',
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' }
  ]
}
