// nav导航栏配置
export default [
      {
        text: '🏡首页',
        link: '/',
      },

      { text: '📢博客',
        items: [
            { text: '🪄博客搭建及美化', link: '/08.Blog/01.搭建/01.搭建个人博客.md' },
            {
                text: '🪁图床搭建', 
                items: [
                    {text: 'CloudFlare-ImgBed', link: '/02.ImgBed/01.图床搭建.md',},
                    {text: 'Myself图床', link: 'https://cloudflare-imgbed-8mr.pages.dev/',},
                    {text: '免版税图片', link: 'https://pixabay.com/',},
                    {text: '图片压缩', link: 'https://squoosh.app/',},
                    {text: 'Wallspic', link: 'https://wallspic.com/cn',},
                ]
            },
        ],
      },

      {
        text: '🗃️知识库',
        items: [
            {text: '💻 Window相关', link: '/01.Windows/01.Windows系统相关.md',},
            {text: '🔱 GitHub相关', link: '/06.Github/01.Scoop.md',},
        ],
      },

      {
        text: '🏓娱乐',
        items: [
          { text: '🎞️ 影视', link: '/03.Movie/01.追剧指南.md' },
          { text: '🎶 音乐', link: '/04.Music/01.HiFiNi音乐磁场.md'},
          { text: '🕹️ 游戏', link: '/photo' },
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
      {
        text: "🎯 功能页",
        items: [
          {text: '⏳ 归档页', link: '/archives'},
          {text: '⚓ 标签页', link: '/tags'},
          {text: '🔗 我的友链', link: '/07.FriendLink/01.我的友链.md'},
          {text: '🌏 网站统计', link: 'https://cloud.umami.is/share/YzFoZ754lQe6j0Eg'},
        ]
      }
    ];