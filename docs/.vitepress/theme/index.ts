// .vitepress/theme/index.ts
import Teek, { useCopyBanner } from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";


// VitePress 样式增强
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css"; //一级标题渐变色
import "vitepress-theme-teek/theme-chalk/tk-aside.css"; // 右侧目栏录文字悬停和激活样式
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css"; // > 引用块样式
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css"; // 代码块移动端样式
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css"; // 文章页淡入效果
import "vitepress-theme-teek/theme-chalk/tk-mark.css"; // 文章内容标记样式（mark 标签）
import "vitepress-theme-teek/theme-chalk/tk-nav-blur.css"; // 导航栏毛玻璃样式
import "vitepress-theme-teek/theme-chalk/tk-nav.css"; // 导航栏毛玻璃样式
import "vitepress-theme-teek/theme-chalk/tk-scrollbar.css"; // 滚动条样式
// import "vitepress-theme-teek/theme-chalk/tk-sidebar.css"; // 侧边栏样式
import "vitepress-theme-teek/theme-chalk/tk-table.css"; // 表格样式调整，去掉单元格之间的线条

// Teek样式增强
import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css"; // 首页 Banner 描述添加渐变效果
import "vitepress-theme-teek/theme-chalk/tk-banner-full-img-scale.css"; // 首页 Banner 壁纸添加缩放动画
import "vitepress-theme-teek/theme-chalk/tk-fade-up-animation.css";  // 首次进入页面添加渐显动画
import "vitepress-theme-teek/theme-chalk/tk-home-card-hover.css";  // 首页卡片悬停效果

import "vitepress-theme-teek/theme-chalk/tk-index-rainbow.css"; // Vitepress 首页彩虹渐变样式

/* .vitepress/theme/style/index.css */
import './style/sidebarIcon.css';

import './style/var.css'; // 个人简介座右铭居中

import './style/blog-banner.scss'; //独立控制白色背景下导航栏文字图标看不清的问题


import './style/scrollbar-2.scss'; // 滚动条样式-2,渐变色滚动条

import "./components/guangbiaoTX/guangbiaoTX.scss"; // ⬅️ 鼠标拖尾样式scss
import { useGuangbiaoTX } from "./components/guangbiaoTX/useGuangbiaoTX"; // ⬅️ 导入鼠标拖尾星星动画ts

import confetti from "./components/Confetti.vue"; // 主页五彩纸屑
import sakura from './components/sakura.js'; // 主页樱花飘落

export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
  setup: () => { // 复制提示 功能，当复制文本时，会在顶部添加一些提示语
    useCopyBanner("复制成功, 转载请标注本文地址", 1200); 
  },
  // enhanceApp({ app }) {
  //   // 注册组件
  //   app.component('confetti' , confetti)  //五彩纸屑
  // },
  enhanceApp({ app }) {
    app.use(sakura); // 樱花飘落
  },
};

// 🔽 鼠标拖尾星星动画
    if (typeof window !== "undefined") {
      useGuangbiaoTX();
    }