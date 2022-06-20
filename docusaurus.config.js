// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  //Meta Data サイトに表示されるタイトルなどではない
  title: 'DevIO DEMOサイト - Tanner',
  tagline: '詳細を書く場所',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require("mdx-mermaid")],
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', 
        },
        blog: false,
        theme: {
          customCss: require.resolve('./static/docs-custom.css'),
        },
      }),
    ],
  ],
  themes: [
    // 簡易ローカル検索のためのプラグイン
    // https://github.com/easyops-cn/docusaurus-search-local
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["ja", "en"],
        docsRouteBasePath: "/",
        docsDir: "docs",
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        //サイトに表示したいタイトルやアイコンの設定
        title: 'DEMO site',
        logo: {
          alt: 'test website',
          src: 'img/docusaurus.svg',
          
        },
        items: [
          //Headerにアイテムを追加したい場合は以下を参考に記載する
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
