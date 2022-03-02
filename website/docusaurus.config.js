// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const foundationsPath = 'foundations/brand'
const contentPath = 'content/voice-tone'
const componentsPath = 'components/app-frame'
const devPath = 'development/getting-started/installation'

function createDocsPath(path) {
  return `/docs/${path}`
}

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

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // TODO: update to site when going live
          editUrl: 'https://github.com/pluralsight/tva/edit/main/website/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          // TODO: update to site when going live
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
      announcementBar: {
        id: 'announcementBar-beta',
        backgroundColor: 'hsla(204, 100%, 20%, 1)',
        content: `⭐️ If you like TVA, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/pluralsight/tva/tree/main">GitHub</a>`,
        textColor: '#fff',
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
            docId: foundationsPath,
            position: 'left',
            label: 'Foundations',
          },
          {
            type: 'doc',
            docId: contentPath,
            position: 'left',
            label: 'Content',
          },
          {
            type: 'doc',
            docId: componentsPath,
            position: 'left',
            label: 'Components',
          },
          {
            type: 'doc',
            docId: devPath,
            position: 'left',
            label: 'Development',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            'aria-label': 'GitHub repository',
            className: 'header-github-link',
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
                to: createDocsPath(foundationsPath),
              },
              {
                label: 'Content',
                to: createDocsPath(contentPath),
              },
              {
                label: 'Components',
                to: createDocsPath(componentsPath),
              },
              {
                label: 'Development',
                to: createDocsPath(devPath),
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
              {
                label: 'Team',
                href: '/docs/team',
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
