// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MBDB docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://molecular-biophysics-database.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mbdb-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Molecular-Biophysics-Database', // Usually your GitHub org/user name.
  projectName: 'mbdb-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages', 
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Molecular-Biophysics-Database/mbdb-docs/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MBDB Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'dataModelSidebar',
            position: 'left',
            label: 'Data model',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API usage',
          },
          {
            type: 'docSidebar',
            sidebarId: 'externalSidebar',
            position: 'left',
            label: 'External Resources',
          },
          {
            type: 'docSidebar',
            sidebarId: 'technologiesSidebar',
            position: 'left',
            label: 'Technologies',
          },
          {
            type: 'docSidebar',
            sidebarId: 'issuesSidebar',
            position: 'left',
            label: 'Reported issues',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Funding',
            items: [
              {
                label: 'MOSBRI',
                href: 'https://www.mosbri.eu/',
              },
            ],
          },
          {
            title: 'Development',
            items: [
              {
                label: 'Data model',
                href: 'https://github.com/Molecular-Biophysics-Database/mbdb-model',
              },
              {
                label: 'Input form',
                href: 'https://github.com/Molecular-Biophysics-Database/mbdb-ui-input',
              },
              {
                label: 'The repository',
                href: 'https://github.com/Molecular-Biophysics-Database/mbdb-app',
              },
              {
                label: 'Docs',
                href: 'https://github.com/Molecular-Biophysics-Database/mbdb-docs',
              }, 
            ],
          },
          {
            title: 'Organizations',
            items: [
              {
                label: "Institute of Biotechnology of the Czech Academy of Sciences",
                href: "https://www.ibt.cas.cz/"
              },
              {
                label: "CESNET",
                href: "https://www.cesnet.cz"
              },
            ] 
          } 
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IBT CAS and CESNET`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
