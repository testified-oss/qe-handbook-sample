import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'QE Handbook',
  tagline: 'Quality Engineering Strategy, Guides, and Projects',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://testified-oss.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/qe-handbook-sample/',
  projectName: 'qe-handbook-sample',
  organizationName: 'testified-oss',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can set
  // useful metadata like html lang here.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
      },
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'QE Handbook',
      logo: {
        alt: 'QE Handbook Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: '/docs',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Handbook',
          items: [
            {
              to: '/docs/strategy',
              label: 'Strategy',
            },
            {
              to: '/docs/guides',
              label: 'Guides',
            },
            {
              to: '/docs/projects/example-project',
              label: 'Projects',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tested QA.`,
    },
    prism: {theme: prismThemes.github},
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
