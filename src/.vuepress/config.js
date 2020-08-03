require('dayjs/locale/zh-cn')
const dayjs = require('dayjs')
dayjs.extend(require('dayjs/plugin/relativeTime'))
dayjs.locale('zh-cn')

module.exports = {
    base: '/notes/',
    title: '𝓝𝓸𝓽𝓮𝓼',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ],
    themeConfig: {
        logo: '/assets/img/logo.svg',
        lastUpdated: '上次更新',
        search: false,
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
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => dayjs(timestamp).fromNow()
            }
        ]
    ],
}
