// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const brandPath = 'foundations/brand'
const introPath = '/docs/intro'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pluralsight Design',
  tagline:
    'A single set of principles, guidelines, patterns, assets and components for Pluralsight.',
  // url: 'https://design.pluralsight.com',
  url: 'https://pluralsight.github.io',
  baseUrl: '/tva/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pluralsight',
  projectName: 'tva',
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pluralsight/tva/edit/main/website/',
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/pluralsight/tva/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'XR709MFGR6',
        // Public API key: it is safe to commit it
        apiKey: 'd446bcb18b9377a3c726a55051d3f53f',
        indexName: 'dev_pluralsight_tva',
        contextualSearch: true,
        searchParameters: {},
      },
      navbar: {
        title: 'Pluralsight Design',
        logo: {
          alt: 'Pluralsight Design System Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'foundations/brand',
            position: 'left',
            label: 'Foundations',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Content',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Components',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Development',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/pluralsight/tva',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Foundations',
                to: `/docs/${brandPath}`,
              },
              {
                label: 'Content',
                to: introPath,
              },
              {
                label: 'Components',
                to: introPath,
              },
              {
                label: 'Development',
                to: introPath,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/pluralsight/tva/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pluralsight/tva',
              },
              {
                label: 'Slack (internal)',
                href: 'slack://channel?id=70HPSJPP&team=02A50N5X',
              },
              {
                label: 'Figma (internal)',
                href: 'https://www.figma.com/file/YsTklBecdddy9RZ3HXddIseD/PSDS-Web?node-id=69%3A2190',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pluralsight LLC. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
