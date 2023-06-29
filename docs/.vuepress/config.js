module.exports = {
    title: '执念不忘空间',
    description: '所以还是爱着',
    themeConfig: {
        logo: '/dh_logo.jpg',
        nav: [
          { text: '首页', link: '/' },
          // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
          { text: 'java', link: 'https://www.baidu.com' },
          { text: '前端', link: 'https://blog.csdn.net', target: '_blank' },
          { text: '豆瓣', link: 'https://movie.douban.com', target: '_self', rel: '' },
          { text: 'GitHub', link: 'https://movie.douban.com', target: '_self', rel: '' },
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