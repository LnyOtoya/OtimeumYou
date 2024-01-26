import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  hostname: "www.otimeum.cf",

  author: {
    name: "Otoyalee(LnyOtoya)",
    url: "https://github.com/LnyOtoya",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "logo.png",

  repo: "https://github.com/LnyOtoya",

  docsDir: "src",

  // favicon: "C:\DocYouShare\OtimeumYou\src\.vuepress\public\logo.png",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "广告位招租",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "以瑟一瑟辈瑟",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/76943281",
      GitHub: "https://github.com/LnyOtoya",
    },
  },

  // 加密配置
  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },


  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    //到时候再说.......
    // 在启用之前需要安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务器，在生产环境中请自行部署并使用自己的服务器！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
