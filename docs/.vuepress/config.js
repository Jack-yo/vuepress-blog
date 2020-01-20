module.exports = {
	theme:'@vuepress/theme-default',
    title: 'Jack的网站',
    description: '小破站，没啥好看',
    dest: './dist',
	base:'/vuepress-blog/'
    port: '8081',
    head: [
        ['link', {rel: 'icon', href: '/rocket.png'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require('./nav'),
		logo:'./images.png',
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',

	}
}


