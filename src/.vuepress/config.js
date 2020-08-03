module.exports = {
    base: '/notes/',
    title: 'Notes',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        logo: '/assets/img/logo.svg',
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
    }
}
