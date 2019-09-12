/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Thomas Guibert',
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.gloot.com',
    pinned: true,
  },
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: false,
  },
];

const siteConfig = {
  title: 'G-Loot Documentation', // Title for your website.
  tagline: 'Everything you need to know to get started',
  url: 'https://developers.gloot.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'g-loot.github.io', // This must match your GitHub repository project name (case-sensitive).
  organizationName: 'g-loot',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'about', label: 'Docs' },
    // { doc: 'doc4', label: 'API' },
    // { page: 'help', label: 'Help' },
    // { blog: true, label: 'Blog' },
    // { languages: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_green.png',
  footerIcon: 'img/logo_green.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#26263C',
    secondaryColor: '#00CD62',
  },

  /* Add Custom Stylesheets */
  stylesheets: [
    // 'https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap',
    '/css/global.css',
    '/css/header.css',
    '/css/landing.css',
    '/css/sidebar.css',
    '/css/custom.css',
    '/fonts/fonts.css',
  ],

  separateCss: [
    'static/css/global.css',
    'static/css/header.css',
    'static/css/landing.css',
    'static/css/sidebar.css',
    'static/css/custom.css',
    'static/fonts/fonts.css',
  ],

  /* Custom fonts for website */
  fonts: {
    // roboto: ['Roboto', 'sans-serif'],
    // myOtherFont: ['-apple-system', 'system-ui'],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} G-Loot`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', '/js/segment.analytics.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  cname: 'developers.gloot.com',
};

module.exports = siteConfig;
