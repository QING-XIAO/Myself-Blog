import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";
import FooterInfo from './ConfigHyde/FooterInfo.ts';
import Nav from './ConfigHyde/Nav.ts'


// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true,  // 是否启用 Teek 主题
  teekHome: true,  // 是否启用 Teek 的首页风格（博客风格）
  vpHome: false,  // 是否启用 VitePress 首页风格
  lang: 'zh-CN',
  loading: "🤺加🤸🏻载🤾🏻中...", // 启用 Loading 动画，为 false 则关闭 Loading 动画
  vitePlugins: {
    autoFrontmatter: true, // Markdown文件Frontmatter自动生成功能
    autoFrontmatterOption: {
      categories: false, // 取消自动生成文章分类, 根据目录层级获取
      permalinkType: "rules", // 可选：simple | rules
      permalinkRules: [
        { folderName: "*" }, // 代表所有文件都生成永久链接，不设置 rule 则默认为 /$path/$uuid6
      ]
    },
    sidebarOption: {
      // initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
      collapsed: true, //打开侧边栏自动收缩功能
    },
  },
  post: {
    postStyle: "list", // 文章列表风格
    excerptPosition: "top", //设为 top 或 bottom 来改变文章摘要的位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "full", // 文章封面图模式 full
    showCapture: false, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: false, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
  themeEnhance: {
    enabled: true, // 启用主题增强功能
    position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
    // 布局切换配置
    layoutSwitch: {
      disabled: false, // 禁用布局切换
      defaultMode: "bothWidthAdjustable", // 布局切换的默认模式
      disableHelp: false, // 禁用帮助提示
      disableAnimation: false, // 禁用布局切换动画
      defaultDocMaxWidth: 90, // 内容布局最大宽度的默认百分比，仅限 0-100
      disableDocMaxWidthHelp: false, // 禁用帮助提示
      defaultPageMaxWidth: 95, // 页面布局最大宽度的默认百分比，仅限 0-100
      disablePageMaxWidthHelp: false, // 禁用帮助提示
    },
    // 布局主题色配置
    themeColor: {
      disabled: false, // 禁用布局主题色切换
      defaultColorName: "ep-yellow", // 布局默认主题色
      defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
      disableHelp: false, // 禁用帮助提示
      disabledInMobile: false, // 是否在移动端禁用
      "append": [
        {
          "label": "博客扩展主题",
          "tip": "博客扩展主题",
          "options": [
            {
              "label": "紫罗兰",
              "value": "violet",
              "color": "#7166f0"
            },
            {
              "label": "珊瑚粉",
              "value": "coral-pink",
              "color": "#ff6b6b"
            },
            {
              "label": "天蓝",
              "value": "sky-blue",
              "color": "#00bbf9"
            },
            {
              "label": "蓝绿",
              "value": "blue-green",
              "color": "#00f5d4"
            },
            {
              "label": "石板灰",
              "value": "slate-gray",
              "color": "#708090"
            },
            {
              "label": "粉红",
              "value": "pink",
              "color": "#f15bb5"
            },
            {
              "label": "黄绿",
              "value": "yellow-green",
              "color": "#8ac926"
            },
            {
              "label": "橙红",
              "value": "orange-red",
              "color": "#ff9e6b"
            }
          ]
        }
      ]
    },
    // 聚光灯配置
    spotlight: {
      disabled: false, // 禁用聚光灯
      defaultStyle: "aside", //  聚光灯默认样式
      disableHelp: false, // 禁用帮助提示
      defaultValue: true, // 聚光灯默认开关状态
    },
  },
  viewTransition: {
    enabled: true, // 是否启用深浅色切换动画效果
    mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
    duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
    easing: "ease-in", // 缓动函数
  },
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
  },
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: false, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: true, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 350, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "capitalize", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
  },
  sidebarTrigger: true, // 侧边栏展开/折叠触发器
  windowTransition: true, // 视图渐入过渡效果
  // bodyBgImg: {  // 背景图片配置，将整个网站的背景色改为图片
  //   imgSrc: ["./images/background/bg1.jpg","./images/background/bg2.jpg","./images/background/bg3.jpg","./images/background/bg4.jpg","./images/background/bg5.jpg","./images/background/bg6.jpg","./images/background/bg7.jpg"], // body 背景图片链接。单张图片 string | 多张图片 string[], 多张图片时每隔 imgInterval 秒换一张
  //   imgOpacity: 0.7, // body 背景图透明度，选值 0.1 ~ 1.0
  //   imgInterval: 15000, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
  //   imgShuffle: true, // body 背景图是否随机切换，为 false 时按顺序切换
  //   mask: true, // body 背景图遮罩
  //   maskBg: "rgba(0, 0, 0, 0.2)", // body 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
  // },
  author: {
    name: "QING-XIAO", // 作者名称
    link: "https://github.com/QING-XIAO", // 点击作者名称后跳转的链接
  },
  banner: {
    enabled: true, // 是否启用 Banner
    name: "QING-XIAO's Blog 🎉🎉", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg1.jpg", "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg2.jpg", "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg3.jpg", "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg4.jpg", "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg5.jpg", "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg6.jpg", "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg7.jpg", "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩bg8.jpg"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: true, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: ["没有说出口的特别喜欢, 就像一场无声无息的鲸落.", "言念君子, 温其如玉."], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: true, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },
  wallpaper: { // 在首页"最顶部"进入全屏后开启,禁止通过快捷键打开开发者工具, 禁止通过右键打开浏览器菜单, 禁止鼠标滚动，页面滚动条会消失
    enabled: true, // 是否启用壁纸模式
    hideBanner: false, // 开启壁纸模式后，是否隐藏 Banner
    hideMask: true, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
  },
  page: {
    disabled: false, // 是否禁用
    pageSize: 6, // 每页显示条目数
    pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
    layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
    size: "default", // 分页大小
    background: false, // 是否为分页按钮添加背景色
    hideOnSinglePage: false, // 只有一页时是否隐藏
    // ...
  },
  homeCardListPosition: "left", //卡片栏列表位置 "left" | "right" | false
  homeCardSort: ["docAnalysis", "topArticle", "tag", "category", "friendLink"], // 首页卡片的位置排序
  tagColor: [
    { border: "#bfdbfe", bg: "#eff6ff", text: "#2563eb" },
    { border: "#e9d5ff", bg: "#faf5ff", text: "#9333ea" },
    { border: "#fbcfe8", bg: "#fdf2f8", text: "#db2777" },
    { border: "#a7f3d0", bg: "#ecfdf5", text: "#059669" },
    { border: "#fde68a", bg: "#fffbeb", text: "#d97706" },
    { border: "#a5f3fc", bg: "#ecfeff", text: "#0891b2" },
    { border: "#c7d2fe", bg: "#eef2ff", text: "#4f46e5" },
  ],
  blogger: { // 博主信息，显示在首页左边第一个卡片
    name: "QING-XIAO", // 博主昵称
    slogan: "少年时驰骋的风, 比黄金都珍贵. ", // 博主签名
    avatar: "https://cloudflare-imgbed-8mr.pages.dev/file/Website/个人资料头像.jpg", // 博主头像
    shape: "circle-rotate", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "https://cloudflare-imgbed-8mr.pages.dev/file/Website/压缩个人资料1.jpg", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100, // 头像大小
    color: "#bbb826ff", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "💖", // 状态图标
      size: 24, // 图标大小
      title: "ヾ(≧▽≦*)o", // 鼠标悬停图标的提示语
    },
  },
  topArticle: {
    enabled: true, // 是否启用精选文章卡片
    title: "🐦‍🔥精选文章", // 卡片标题
    emptyLabel: "暂无精选文章", // 精选文章为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },
  category: {
    enabled: false, // 是否启用分类卡片
    path: "/categories", // 分类页访问地址
    pageTitle: "🗂️全部分类", // 分类页卡片标题
    homeTitle: "🗃️文章分类", // 卡片标题
    moreLabel: "更多 ...", // 查看更多分类标签
    emptyLabel: "暂无文章分类", // 分类为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  tag: {
    enabled: true, // 是否启用标签卡片
    path: "/tags", // 标签页访问地址
    pageTitle: "🔖全部标签", // 标签页页卡片标题
    homeTitle: "🏷️热门标签", // 卡片标题
    moreLabel: "更多 ...", //  查看更多分类标签
    emptyLabel: "暂无标签", // 标签为空时的标签
    limit: 25, // 一页显示的数量
    autoPage: true, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    list: [
      {
        name: "Teeker",
        desc: "朝圣的使徒，正在走向编程的至高殿堂！",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
        link: "http://notes.teek.top/",
      },
      {
        name: "Teeker Design Vue3",
        desc: "一个颜值强大、功能丰富、开箱即用的中后台管理系统解决方案",
        avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/teek-design/20250807012638.png",
        link: "https://vue3-design-docs.teek.top/",
      },
    ], // 友情链接数据列表
    title: "🤝友情链接", // 卡片标题
    emptyLabel: "暂无友情链接", // 友情链接为空时的标签
    limit: 5, // 一页显示的数量
    autoScroll: true, // 是否自动滚动
    scrollSpeed: 10000, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: true, // 是否自动翻页
    pageSpeed: 6000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  docAnalysis: {
    enabled: true, // 是否启用站点信息卡片
    createTime: "2025-10-20", // 站点创建时间
    wordCount: true, // 是否开启文章页的字数统计
    readingTime: true, // 是否开启文章页的阅读时长统计
    // 访问量、访客数统计配置
    statistics: {
      provider: "busuanzi", // 网站流量统计提供商
      siteView: true, // 是否开启首页的访问量和排名统计
      pageView: true, // 是否开启文章页的浏览量统计
      tryRequest: true, // 如果请求网站流量统计接口失败，是否重试
      tryCount: 5, // 重试次数，仅当 tryRequest 为 true 时有效
      tryIterationTime: 2000, // 重试间隔时间，单位：毫秒，仅当 tryRequest 为 true 时有效
      permalink: true, // 是否只统计永久链接的浏览量，如果为 false，则统计 VitePress 默认的文档目录链接
    },
    // 自定义现有信息
    overrideInfo: [
      {
        key: "lastActiveTime",
        label: "活跃时间",
        value: (_, currentValue) => (currentValue + "").replace("前", ""),
        show: true,
      },
      { key: "visitCount", show: false },
      { key: "runtime", show: false },
    ],
    // 自定义额外信息
    // appendInfo: [{ key: "index", label: "序号", value: "天客 99" }],
  },
  // footerGroup: [ // 页脚信息组配置
  //   {
  //     title: "外部链接",
  //     links: [
  //       { name: "示例 1", link: "https://vp.teek.top", icon: "icon-github" },
  //       { name: "示例 2", link: "https://vp.teek.top" },
  //       { name: "示例 3", link: "https://vp.teek.top" },
  //     ],
  //   },
  //   {
  //     title: "内部链接",
  //     links: [
  //       { name: "快速开始", link: "/guide/quickstart" },
  //       { name: "配置简介", link: "/reference/config" },
  //     ],
  //   },
  // ],
  footerInfo: FooterInfo,
  // footerInfo: {
  //   // 页脚信息，支持 HTML 格式（位于主题版权上方）
  //   topMessage: [
  //     `<span><img alt="VitePress" src="../images/background/animals.png" width="750" height="75"></span>`
  //   ],
  //   // 页脚信息，支持 HTML 格式（位于主题版权下方）
  //   bottomMessage: ["请不要把陌生人的些许善意, 视为珍惜的瑰宝, 确把身边亲近人的全部付出, 当作天经地义的事情, 对其视而不见."],
  //   // 主题版权配置
  //   theme: {
  //     show: true, // 是否显示主题版权，建议显示
  //     name: 'Theme By Teek@1.5.1', // 自定义名称
  //     link: "https://vp.teek.top/", // 自定义链接
  //   },
  //   // 博客版权配置
  //   copyright: {
  //     show: true, // 是否显示博客版权
  //     // createYear: 2025, // 创建年份
  //     suffix: "QING-XIAO's Blog", // 后缀
  //   },
  //   // // ICP 备案信息配置
  //   // icpRecord: {
  //   //   name: "",
  //   //   link: "",
  //   // },
  //   // // 网络安全备案信息配置
  //   // securityRecord: {
  //   //   name: "",
  //   //   link: "",
  //   // },

  // },
  articleBanner: {
    enabled: true, // 是否启用单文章页 Banner, 仅在没有侧边栏的文章页生效
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
    defaultCoverImg: "https://b770a0f3.cloudflare-imgbed-8mr.pages.dev/file/bg/3.jpg", // 默认封面图
    defaultCoverBgColor: "#4aa7e6ff", // 默认封面背景色，优先级低于 defaultCoverImg
  },
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，仅在文章页显示
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
  },
  breadcrumb: {
    enabled: false, // 是否启用面包屑
    showCurrentName: true, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
    homeLabel: "首页", // 鼠标悬停首页图标的提示文案
  },
  pageStyle: "segment-nav", // 文章页的样式风格不是 VitePress 默认尺寸，则该配置项失效
  articleShare: {
    enabled: true, // 是否开启文章链接分享功能
    text: "分享此页面", // 分享按钮文本
    copiedText: "链接已复制", // 复制成功文本
    query: false, // 是否包含查询参数
    hash: false, // 是否包含哈希值
  },
  // articleBottomTip: frontmatter => {
  //   if (typeof window === "undefined") return;

  //   const hash = false;
  //   const query = false;
  //   const { origin, pathname, search } = window.location;
  //   const url = `${origin}${frontmatter.permalink ?? pathname}${query ? search : ""}${hash ? location.hash : ""}`;
  //   const author = "QING-XIAO";

  //   return {
  //     type: "tip",
  //     // title: "声明", // 可选
  //     text: `<p>作者：${author}</p>
  //            <p style="margin-bottom: 0">链接：<a href="${decodeURIComponent(url)}" target="_blank">${decodeURIComponent(url)}</a></p>
  //            <p>版权：此文章版权归 ${author} 所有，如有转载，请注明出处!</p>
  //           `,
  //   };
  // },
  articleUpdate: {
    enabled: false, // 是否启用文章最近更新栏
    limit: 3, // 文章最近更新栏显示数量
  },
  comment: {
    provider: "giscus", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      // envId: "your envId",

      // waline 配置，官网：https://waline.js.org/
      // serverURL: "your serverURL",
      // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

      // giscus 配置，官网：https://giscus.app/zh-CN
      repo: "QING-XIAO/giscus-comments",
      repoId: "R_kgDOOSmmjg",
      category: "Announcements",
      categoryId: "DIC_kwDOOSmmjs4CosiI",
      inputPosition: "top",
      mapping: "title",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "your server",
      // site: "site",
    },
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "83489b1b6d3dedfb0dcc25a7f83e1268",
      },
    },
    {
      provider: "google",
      options: {
        id: "G-XXPL68MHJ2",
      },
    },
    {
      provider: "umami",
      options: {
        id: "dc39857e-09a7-43ae-bca8-f02e3b189928",
        src: "https://cloud.umami.is/script.js",
      },
    },
  ],


});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QING-XIAO",
  description: "A VitePress Site",
  extends: teekConfig,
  head: [['link', { rel: 'icon', href: 'https://cloudflare-imgbed-8mr.pages.dev/file/Website/网站logo.jpg' }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    nav: Nav,
    // nav: [
    //   {
    //     text: '🏡首页',
    //     link: '/',
    //   },

    //   { text: '📢Teeker网站', link: '/Teeker' },

    //   {
    //     text: '🗃️知识库',
    //     items: [
    //       { text: '运维', link: '/linux' },
    //       { text: '前端', link: '/qianduan' },
    //       { text: '编程', link: '/code' },
    //     ],
    //   },

    //   {
    //     text: '💎专题',
    //     items: [
    //       { text: '博客搭建', link: '/blog-dajian' },
    //       // { text: 'Teeker', link: '/Teeker' },
    //       // { text: 'vdoing', link: '/vdoing' },
    //       { text: '前端demo', link: '/qianduan-demo' },
    //       { text: 'nas', link: '/nas' },
    //       { text: '脚本', link: '/jiaoben' },
    //       { text: 'git', link: '/git' },
    //       { text: '面试', link: '/mianshi' },
    //       { text: '🧰工具', link: '/tools' },
    //       { text: '🎨生活', link: '/life' },
    //     ],
    //   },


    //   {
    //     text: '🏓娱乐',
    //     items: [
    //       { text: '相册', link: '/photo' },
    //       { text: '音乐', link: '/music' },
    //       { text: '电影', link: '/movie' },
    //     ],
    //   },


    //   { text: "💖精神小屋", link: "/love" },

    //   { text: "👂留言区", link: "/liuyanqu" },

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
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // 可以通过将 SVG 作为字符串传递来添加自定义图标
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      {
        icon: {
          svg: '<svg t="1760762130618" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15875" width="200" height="200"><path d="M834.08 235.31c33.39-62.01-4.77-143.13-4.77-143.13-85.86 0-147.9 57.24-147.9 57.24-33.39-19.08-143.13-19.08-143.13-19.08s-109.74 0-143.13 19.08c0 0-62.01-57.24-147.9-57.24 0 0-38.16 81.09-4.77 143.13 0 0-76.32 71.55-47.7 224.22 26.91 143.46 152.67 181.29 233.76 181.29 0 0-33.39 28.62-28.62 76.32 0 0-47.7 28.62-95.4 9.54s-71.55-66.78-71.55-66.78-47.7-62.01-95.4-38.16c0 0-14.31 14.31 38.16 38.16 0 0 38.16 57.24 52.47 90.63s90.63 62.01 166.98 42.93v109.71s0 9.54-19.08 14.31-19.08 14.31-9.54 14.31h343.5c9.54 0 9.54-9.54-9.54-14.31s-19.08-14.31-19.08-14.31V793.46s0.42-57.21 0-76.32c-1.05-47.94-33.39-76.32-33.39-76.32 81.09 0 206.85-37.83 233.76-181.29 28.62-152.67-47.7-224.22-47.7-224.22z" fill="#333333" p-id="15876"></path></svg>'
        },
        link: 'https://github.com/QING-XIAO',
      },
      {
        icon: {
          svg: '<svg t="1760761922100" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9123" width="200" height="200"><path d="M987.88876907 942.68845653c-8.47679467 0.032-17.050656 0.7712-25.430384-0.128-30.76051413-3.33866453-53.17330027 31.5946464-63.83356054 68.42449067-9.5999936 33.16797973-46.04370453 50.12263573-78.85861653 46.71890347-37.8890432-3.88586453-62.96636053-25.55945067-72.63142187-59.81862934-5.81226347-20.71145387-23.37598507-36.7658432-42.70504-36.6378432-133.34925013 0.7712-251.96037547 0.38613333-385.30855893 0-15.34932373-0.032-31.72371307 14.67412373-36.21971093 32.75197974-9.5999936 38.78717547-42.57597333 63.4154272-79.08474987 64.02555946-37.79197653 0.64213333-70.63995627-23.34398507-81.6532832-63.60849386-4.62293013-16.85758933-12.4266592-52.9162336-28.54398187-52.0170336-20.74345387 1.1562656-41.61384107 0.57813333-62.42129386 0.22506666-22.73278613-0.41706667-32.78291307-9.5359936-32.78291307-31.1135808 0.16-219.4014624 0.48213333-438.77092587 1.0602656-658.1713216 0.064-22.6698528 9.4719936-30.31144747 35.60851093-30.34344853 107.14766613-0.128 214.29533227-0.064 321.44406614-0.064h22.41171946c0.67413333-1.83039893 1.38133227-3.69279787 2.0554656-5.55519573-24.88531733-13.06879147-49.76956907-26.13651733-74.6218208-39.2373088-41.25970773-21.7706528-82.58448213-43.47517333-123.7801888-65.34182614-16.69652267-8.86186133-23.63305173-22.37971947-14.19199146-39.1413088 9.5359936-16.95358933 25.30131733-17.98078827 41.77384106-9.31199466 96.74447253 51.02183467 193.52094613 101.97860267 289.912352 153.54657066 24.69225173 13.22879147 69.13062293 5.29813013 85.02394667-17.050656 49.2885024-69.48262293 98.54393813-138.96738027 147.83137493-208.48413653 1.73333227-2.4394656 3.40266453-4.9759968 5.2010624-7.384528C752.2078496-33.90933333 768.16624-39.0143968 782.67929707-27.87200427c16.79358933 12.8757248 13.9029248 28.15998293 3.1146656 43.47517334-20.00425387 28.35198187-40.00744213 56.6719648-59.979696 85.02501333-27.6778496 39.3013088-55.3236992 78.6346176-86.05221334 122.3039232h28.70504854c106.41060053 0 212.78706667-0.032 319.16460053 0.032 32.4938464 0.032 37.50397653 4.94506347 37.53597653 36.53971093 0.32 215.6446656 0.60906667 431.28933013 0.80213334 646.93292907 0.032 30.8255808-5.6511968 36.05971093-38.0810432 36.25171093z m-159.90389974 64.5076928c17.018656-1.1242656 25.10931733-46.2047712 30.27944747-63.2554272h-64.34662613c6.32532907 18.75198827 15.0911904 64.5396928 34.06717866 63.2554272z m-627.08974186 0.032c18.84798827 1.1562656 27.7418496-44.40743893 33.3610464-63.12636053h-63.3834272c4.30293013 17.62772267 13.16479147 62.0991616 30.0223808 63.12529387z m760.406992-720.2704832H62.24774827v610.07215147h899.0543712V286.95766613zM126.4663744 411.60505493c0.064-29.7333152 14.41705813-58.79249707 44.34237227-58.82449706 228.3923904-0.032 438.6098592-1.66933227 667.0022496-1.60533227 30.3743808 0 59.176496 31.0175808 59.272496 60.42982933 0.38613333 141.8580448-0.224 251.02917653 0 392.88615467 0.064 30.31144747-27.42078293 60.39676267-59.272496 60.42982827-113.85912853 0.064-212.2089344 0-326.03606294 0-113.82606187 0-212.1769344 0.064-326.03499626 0-33.1370464-0.032-59.30662933-27.77491627-59.27356267-60.42982827 0.16-141.15191147-0.256-251.7353088 0-392.88615467z m715.935552 388.48722347c0-134.1193824-4.59093013-257.1945056-4.59093013-388.48722347H185.7388704c0 133.34818347-0.7712 256.35824-0.77119893 388.48722347h657.43318826zM370.75208853 489.82367253c1.86239893-0.8352 4.17386453-0.67413333 11.94452587-1.79839893 4.5279968 4.43093013 15.95732373 10.53226027 17.178656 18.17385493 1.3802656 8.92586133-3.4037312 24.49918507-10.3071936 27.99998294-42.19090667 21.4154528-85.53808 40.7135744-128.98125333 59.62662933-13.22985813 5.74613013-27.77598293 1.4122656-31.1466464-12.7157248-2.2154656-9.24799467 1.76639893-26.81171627 8.41279466-30.15038187 43.47517333-21.9946528 88.39567787-41.1647744 132.8991168-61.1359616z m13.26079147 143.1423104c8.219728-0.28906667 18.84798827 11.07732693 24.78931733 19.74718827 4.75093013 6.9034624 2.7605312 17.94878827 6.10026347 26.29651627 6.32532907 15.8943904 18.23785493 31.01864747 35.8335776 27.29278293 13.0037248-2.7285312 24.88531733-15.73332373 34.645312-26.52158293 4.8159968-5.33013013 4.01386453-15.86132373 5.17013013-24.1141184 2.1834656-15.54132373 11.36639253-25.10931733 26.7146496-24.72425174 14.0309248 0.35306667 23.14985173 8.82986133 24.94931734 24.0181184 1.15519893 9.5999936 1.4122656 21.51251947 7.1594624 27.90291627 9.18399467 10.21012693 22.41171947 22.53971947 34.261312 22.92585173 10.7231936 0.352 23.75998507-12.6186592 32.20477973-22.63678506 5.6191968-6.6474624 5.29813013-18.3989216 7.0634624-27.99998294 2.85866453-15.3151904 11.72052587-24.62718507 27.5818496-23.4069184 15.76532373 1.2202656 24.0501184 11.36639253 23.43998507 27.19678294-1.50933227 40.16744107-17.46772267 72.82235413-55.0996992 90.74021013-35.0623776 16.72852267-67.81435733 9.5359936-96.51940587-16.18345707-1.54133227-1.3802656-3.4037312-2.37653227-5.33013013-3.69279786-8.73386133 6.06932907-16.82558933 13.10079147-26.10451734 17.94878933-30.34344747 15.82932373-60.71889493 14.51412373-88.7178112-4.9439968-30.88851413-21.51358613-44.66343893-52.8522336-41.90184-89.29594453 0.57706667-7.89866133 15.2191904-20.26025387 23.75998507-20.54932054z m223.99346027-145.00470933c7.44852907-13.03679147 20.6783872-16.60052267 33.03997866-9.5679936 49.09436907 27.96691627 97.64367253 56.8959648 145.87190934 86.24421227 5.7791968 3.4997312 8.47679467 11.91252587 10.4991936 14.9311904 0.54613333 23.85705173-19.20105493 36.82877653-37.37490987 26.585584-48.58130347-27.38878293-96.35940693-56.22289813-144.0735104-85.15194667-12.5866592-7.6426624-15.2511904-20.3263872-7.96266133-33.0410464z" fill="#2c2c2c" p-id="9124"></path></svg>'
        },
        link: 'https://space.bilibili.com/41116525',
      },
    ],
    logo: 'https://cloudflare-imgbed-8mr.pages.dev/file/Website/左上角logo.png',
    docFooter: { prev: '上一篇', next: '下一篇' }, // 上一页下一页
    sidebarMenuLabel: '菜单',  //定义侧边栏菜单标签，该标签仅在移动端视图中显示
    returnToTopLabel: '返回顶部', //自定义返回顶部按钮的标签，该标签仅在移动端视图中显示
    lightModeSwitchTitle: '切换浅色模式',
    darkModeSwitchTitle: '切换深色模式',
    darkModeSwitchLabel: '深色模式开关', //自定义深色模式开关标签，该标签仅在移动端视图中显示
    outline: { label: '页面导航', level: 'deep' },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',  // { dateStyle: 'full',  timeStyle: 'medium' }
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/QING-XIAO/Myself-Blog',
      text: '在 GitHub 上编辑此页'
    },  

  },

  markdown: {
    lineNumbers: true,  //代码块行号
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },

});


