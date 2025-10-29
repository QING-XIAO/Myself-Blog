import { version } from "vitepress-theme-teek/es/version"; // 导入版本号

export default  {
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
    topMessage: [
      `<span><img alt="VitePress" src="https://cloudflare-imgbed-8mr.pages.dev/file/Website/animals.png" width="750" height="75"></span>`
    ],
    // 页脚信息，支持 HTML 格式（位于主题版权下方）
    bottomMessage: ["请不要把陌生人的些许善意, 视为珍稀的瑰宝, 却把身边亲近人的全部付出, 当作天经地义的事情, 对其视而不见.",  `<span id="runtime"></span>`,],
    customHtml: ``, // 搭配 ./theme/composables/useRuntime.ts
    // 主题版权配置
    theme: {
      show: true, // 是否显示主题版权，建议显示
      name: `Theme By Teek@ v${version}`,// 自定义名称
      link: "https://vp.teek.top/", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: true, // 是否显示博客版权
      // createYear: 2025, // 创建年份
      suffix: "QING-XIAO's Blog", // 后缀
    },
    // // ICP 备案信息配置
    // icpRecord: {
    //   name: "",
    //   link: "",
    // },
    // // 网络安全备案信息配置
    // securityRecord: {
    //   name: "",
    //   link: "",
    // },

  };