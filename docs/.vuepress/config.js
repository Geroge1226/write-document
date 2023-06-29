module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        logo: '/dh_logo.jpg',
        nav: [
          { text: 'Home', link: '/' },
          // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
          { text: '百度', link: 'https://www.baidu.com' },
          { text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank' },
          { text: '豆瓣', link: 'https://movie.douban.com', target: '_self', rel: '' },
          // 支持嵌套,形成下拉式的导航菜单
          {
            text: '语言',
            ariaLabel: 'Language Menu',
            items: [
              { text: '中文', link: '/language/chinese/' },
              { text: '英文', link: '/language/english/' }
            ]
          }
        ],
        // 设置左侧自动生成边栏
        sidebar:'auto'
      }
}