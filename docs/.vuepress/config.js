module.exports = {
  // 构建生成的文件路径，相对于根目录而言
  dest: './docs-dist',

  // 设置站点根路径，否则静态资源路径会有问题
  base: '/front-end-engineer-notebook/',

  // 添加 github 链接，用于 gh-pages -d dist 命令
  repo: 'https://github.com/helinjiang/front-end-engineer-notebook',

  title: 'web前端工程师笔记',
  description: '笔记',
  head: [['link', {rel: 'icon', href: `/logo.png`}]],
  themeConfig: {
    locales: {
      '/': {
        navs: [
          {text: '学习文档', link: '/docs/'},
          {text: 'Issues', link: 'https://github.com/helinjiang/front-end-engineer-notebook'},
        ],
        sidebar: {
          '/docs/': [
            {
              title: '关于',
              path: '/docs/',
              collapsable: false,
            },
            {
              title: 'JavaScript',
              children: [
                {
                  title: 'JavaScript 导论',
                  children: [
                    '/docs/javascript/00/history',
                    '/docs/javascript/00/why-need-to-learn'
                  ]
                },
                {
                  title: '第一部分 基本语法',
                  children: [
                    {
                      title: '词法结构',
                      children: [
                        '/docs/javascript/01/lexical-structure/character-set',
                        '/docs/javascript/01/lexical-structure/comments',
                        '/docs/javascript/01/lexical-structure/literals',
                        '/docs/javascript/01/lexical-structure/identifiers',
                        '/docs/javascript/01/lexical-structure/reserved-words',
                        '/docs/javascript/01/lexical-structure/optional-semicolons',
                      ]
                    }
                  ]
                },
              ],
            },
          ]
        },
      },
    },
  },
};
