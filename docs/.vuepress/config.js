var nav = require('./nav.js')
var { EcosystemNav, ComponentNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'DFW-Document',
  description: 'A magical annotator app',
  base: '/vue-element-admin-site/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'zy19940510/dfw-web',
    docsRepo: 'zy19940510/dfw-web-site',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'vue_element_admin'
    },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Features',
            items: genNav(deepClone(ComponentNav), 'EN')
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Essentials',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: genAdvancedSidebar()
            },
            {
              title: 'Other',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            }
          ],
          '/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'EN'
          ),
          '/feature/script/': ['/feature/script/svgo.md']
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '功能',
            items: genNav(deepClone(ComponentNav), 'ZH')
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar('/zh')
            },
            {
              title: '进阶',
              collapsable: false,
              children: genAdvancedSidebar('/zh')
            }
          ],
          '/zh/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'ZH'
          ),
          '/zh/feature/script/': ['/zh/feature/script/svgo.md']
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A magical annotator app'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: 'A magical annotator app'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/layout.md',
    '/guide/essentials/router-and-nav.md',
    '/guide/essentials/permission.md',
    '/guide/essentials/tags-view.md',
    '/guide/essentials/new-page.md',
    '/guide/essentials/style.md',
    '/guide/essentials/server.md',
    '/guide/essentials/mock-api.md',
    '/guide/essentials/import.md',
    '/guide/essentials/deploy.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/cors.md',
    '/guide/advanced/eslint.md',
    '/guide/advanced/git-hook.md',
    '/guide/advanced/lazy-loading.md',
    '/guide/advanced/chart.md',
    '/guide/advanced/icon.md',
    '/guide/advanced/theme.md',
    '/guide/advanced/i18n.md',
    '/guide/advanced/error.md',
    '/guide/advanced/webpack.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
