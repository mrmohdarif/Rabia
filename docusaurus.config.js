// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rabia",
  tagline: "A city of devotation",
  favicon: "img/RabiaLogo.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Rabia", // Usually your GitHub org/user name.
  projectName: "Rabia", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hi"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/Rabia.ico",
        },
        items: [
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Collections",
          },
          
          {
            label: "99 Names of Allah",
            to: "/99-Names-of-Allah",
          },
          {
             type: "docSidebar",
            sidebarId: "gretwomenSidebar",
            position: "left",
            label:"WOMEN IN ISLAM",
            to: "/women-in-islam",
          },
          {
            label:"THE HOLY SITES",
            to: "/the-holy-sites",
          },
          {
            label: "Events",
            to: "/events",
          },
          

          { to: "/subscribe", 
            label: "Subscribe", 
            position: "left" 
          },
          {
            href: "https://github.com/mrmohdarif/Rabia",
            label: "GitHub",
            position: "right",
          },

          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Collections",
                to: "/docs/category/naats",
              },
              {
                label: "About us",
                to: "/aboutUs",
              },
              {
                label: "Contact",
                to: "/contact",
              },
              {
                label: "Subscribe",
                to: "/subscribe",
              },
            ],
          },
          {
            title:"Feature",
            items:[
              {
                label: "Tasbih Counter",
                to: "/tasbih-counter",
              },
              {
                label:"Prayer Times Online",
                to: "/prayer-times"
              },
              {
                label:"99 Names of Allah",
                to: "/99-names-of-Allah"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "linkedin",
                href: "https://www.linkedin.com/in/mohd-arif-115b87231/",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              // {
              //   label: "GitHub",
              //   href: "https://github.com/mrmohdarif/Rabia",
              // },
            ],
          },
        ],
        
        copyright: `Copyright © 2024 Rabia, Made by Mohd Arif`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
