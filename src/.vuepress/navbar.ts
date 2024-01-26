import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "经验心得",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Android",
        icon: "pen-to-square",
        prefix: "Android/",
        children: [
          { text: "安卓1", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: "Windows",
        icon: "pen-to-square",
        prefix: "Windows/",
        children: [
          {
            text: "视窗1",
            icon: "pen-to-square",
            link: "1",
          },
        ],
      },
    ],
  },
]);
