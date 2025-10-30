// nav导航栏配置
export default [
      {
        text: '🏡首页',
        link: '/',
      },

      { text: '📢博客',
        items: [
            {
                text: '🧩博客搭建', 
                items: [
                    {text: 'VitePress', link: 'https://vitepress.dev/zh/',},
                ]
            },
            {
                text: '🪁图床搭建', 
                items: [
                    {text: 'CloudFlare-ImgBed', link: '/02.ImgBed/01.图床搭建.md',},
                ]
            },
            {
                text: '🪄博客美化', 
                items: [
                    {text: 'Vitepress Theme Teek', link: 'https://vp.teek.top/',},
                    {text: 'One Blog', link: 'https://onedayxyy.cn/',},
                    {text: '白木💕纸鸢社🗞️', link: 'https://baimu.live/',},
                    {text: 'Hyde Blog', link: 'https://teek.seasir.top/',},
                    {text: '威威 Blog', link: 'https://dl-web.top/',},
                    {text: '时光笔记', link: 'https://kandu.cxcare.top/',},
                    {text: 'emoji表情', link: 'https://www.webfx.com/tools/emoji-cheat-sheet/',},
                    {text: 'Canvas Confetti', link: 'https://www.kirilv.com/canvas-confetti/',},

                ]
            }
        ],
      },

      {
        text: '🗃️知识库',
        items: [
            {text: 'Window相关', link: '/01.Windows/01.Windows系统相关.md',},
        ],
      },

      {
        text: '🏓娱乐',
        items: [
          { text: '相册', link: '/photo' },
          { text: '音乐', link: '/music' },
          { text: '电影', link: '/movie' },
        ],
      },

    //   {
    //     text: '👏索引',
    //     items: [
    //       { text: '分类', link: '/categories' },
    //       { text: '标签', link: '/tags' },
    //       { text: '归档', link: '/archives' },
    //     ],
    //   },

    //   {
    //     text: '🍷关于',
    //     items: [
    //       { text: '关于我', link: '/about-me' },
    //       { text: '关于本站', link: '/aboute-website' },
    //       { text: '🤝友链', link: '/youlian' },
    //       { text: '🌐网页导航', link: '/websites' },
    //       { text: '🔄更新日志', link: '/teeker-update-log' },
    //       { text: '👏开源项目', link: '/opensource' },
    //     ],
    //   },
    ];