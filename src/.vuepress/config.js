require('dayjs/locale/zh-cn')
const dayjs = require('dayjs')
dayjs.extend(require('dayjs/plugin/relativeTime'))
dayjs.extend(require('dayjs/plugin/localizedFormat'))
dayjs.locale('zh-cn')

module.exports = {
    base: '/notes/',
    title: '𝓝𝓸𝓽𝓮𝓼',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],

        ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/img/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/img/logo.png', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/img/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        logo: '/assets/img/logo.png',
        lastUpdated: '上次更新',
        // search: false,
        searchMaxSuggestions: 10,
        nav: [
            {text: '主页', link: '/'},
            {
                text: '笔记',
                items: [
                    {text: '开发笔记', link: '/note/dev/'},
                    {text: '阅读笔记', link: '/note/read/'},
                ],
            },
            {text: '计划', link: '/plan/'},
            {text: '总结', link: '/review/'},
            {text: '关于', link: '/about'},
            {text: 'Github', link: '//github.com/hefengxian/', target: '_blank'},
        ],
        docsRepo: 'hefengxian/notes',
        docsDir: 'src',
        editLinks: true,
        editLinkText: '勘误',
        smoothScroll: true,
    },

    plugins: [
        '@vuepress/back-to-top',
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                },
                generateSWConfig: {
                    skipWaiting: true,
                }
            }
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => dayjs(timestamp).format('llll')
            }
        ],
        [
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
            },
        ],
        'flowchart',
    ],
}
