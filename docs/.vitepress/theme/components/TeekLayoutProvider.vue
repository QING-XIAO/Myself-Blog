<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { clockIcon } from "vitepress-theme-teek";
import TitleChange from "../components/TitleChange.vue" //导入网页标题变化
import ScrollProgressBar from "../components/ScrollProgressBar.vue" //导入顶部滚动条组件
import Clock from "../components/Clock.vue"; // 时钟组件
// import Teek from "vitepress-theme-teek";
import CalendarCard from "./CalendarCard.vue"; //日历卡片
import ScheduleCard from "./ScheduleCard.vue"; //节日倒计时卡片
import NotFound from "../components/404.vue";
import GlobalGreet from "./GlobalGreet.vue"; //导入全局问候组件
import DocFooterCopyright from "./DocFooterCopyright.vue"; //导入文档页脚版权组件

// 运行时间
import { watch, nextTick } from "vue"; 
import { useData } from "vitepress";
import { useRuntime } from "../composables/useRuntime";

const { frontmatter } = useData(); // 获取 frontmatter

// 页脚运行时间
const { start, stop } = useRuntime("2025-10-20 20:00:00", {
  prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>小破站已在地球上苟活了`,
});

watch(
  frontmatter,
  async (newVal) => {
    await nextTick();
    if (newVal.layout === "home") start();
    else stop();
  },
  { immediate: true }
);

</script>

<template>
  <Teek.Layout>
    <template #layout-top>

      <ScrollProgressBar />
      <!--网页标题切换组件  -->
      <TitleChange />
      <GlobalGreet />
    </template>

    <!-- 右上角时钟组件 -->
    <template #nav-bar-content-after>
      <Clock/>
    </template>

    <!-- 自定义公告卡片 公告-->
    <template #teek-home-card-top-article-before>
    <NoticeCard />
    <CalendarCard />
    <ScheduleCard />
    </template>

    <template #not-found>
      <NotFound />
    </template>
    
    <!-- 文章末尾版权说明 -->
    <template #doc-footer-before>
      <DocFooterCopyright />
    </template>

  </Teek.Layout>
</template>
