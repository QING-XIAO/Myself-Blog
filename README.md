# Myself-Blog 🎉🎉

## 🧩 搭建
利用 [Vitepress](https://github.com/vuejs/vitepress) + [vitepress-theme-teek](https://github.com/Kele-Bingtang/vitepress-theme-teek) 所搭建的个人静态博客.

## 🎯 图床
> CloudFlare Page部署页面 + Telegram Bot转发到Telegram Channel实现无限存储 Nice!!

``` bash
图片居中的两种写法: 

1. HTML语法: <img src="/path/to/your/image.jpg" alt="图片描述" style="display: block; margin: 0 auto;">
2. 某些扩展了Markdown语法的解析器: ![图片](/path/to/your/image.jpg){style="display: block; margin: 0 auto"}
```

采用 [CloudFlare-ImgBed](https://github.com/MarSeventh/CloudFlare-ImgBed) 所搭建.

## 🏅 部署
GitHub仓库 + [CloudFlare Page](https://dash.cloudflare.com/) 所进行部署静态博客.

```
构建命令: pnpm run dev
```

```
构建输出目录: docs/.vitepress/dist
```

```
环境变量: NODE_VERSION  22.20.0
```


