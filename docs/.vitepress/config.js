import sidebarCSS from './sidebar/css';
import sidebarECMAScript from './sidebar/js';
import sidebarES6 from './sidebar/es.js';
import sidebarVue from './sidebar/vue.js';
import sidebarGo from './sidebar/go.js';
import sidebarVue3 from './sidebar/vue3.js';
import sidebarWeb3 from './sidebar/web3.js';
import sidebarReact from './sidebar/react.js';
import sidebarWebpack from './sidebar/webpack.js';
import sidebarHttp from './sidebar/http.js';
import sidebarNode from './sidebar/node.js';
import sidebarTs from './sidebar/typescript.js';
import sidebarAlgorithm from './sidebar/algorithm.js';
import sidebarApplet from './sidebar/applet.js';
import sidebarGit from './sidebar/git.js';
import sidebarQuestions from './sidebar/questions.js';
import sidebarEssay from './sidebar/essay';

export default {
  title: 'vivace-itnerview',
  description: 'interview docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Web Interview',
    logo: '/logo.png',
    lastUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/caslanbigeyes',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present caslanbigeyes',
    },
    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    nav: [
      {
        text: 'CSS',
        link: '/css/box',
        activeMatch: '/css',
      },
      {
        text: "JavaScript",
        items: [
          {
            text: "JavaScript",
            link: '/JavaScript/data_type',
          },
          {
            text: "es6", 
            link: '/es6/var_let_const',
          },
          {
            text: "Typescript",
            link: '/typescript/typescript_javascript',
          },
        ]
      },
      {
        text: "框架",
        items: [
          {
            text: "Vue",
            link: '/vue/vue',
          },
          {
            text: "Vue3",
            link: '/vue3/goal',
          },
          {
            text: "React",
            link: '/React/React',
          },
          {
            text: "webpack",
            link: '/webpack/webpack',
          },
        ]
      },
    ],
    sidebar: {
      '/css/': sidebarCSS(),
      '/JavaScript': sidebarECMAScript(),
      '/es6/': sidebarES6(),
      '/vue/': sidebarVue(),
      '/vue3/': sidebarVue3(),
      '/web3/': sidebarWeb3(),
      '/React/': sidebarReact(),
      '/webpack/': sidebarWebpack(),
    },
  },
};
