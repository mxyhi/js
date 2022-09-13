import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/js/web/",
  lang: "zh-CN",
  public: "public",
  title: "深入浅出web",
  description: "学习记录",
  pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
  theme: defaultTheme({
    sidebarDepth: 5,
    home: "/",
    // Public 文件路径
    logo: "/assets/img/logo.png",
    navbar: [
      // NavbarItem
      {
        text: "首页",
        link: "/",
      },
      // {
      //   text: "Function",
      //   link: "/function/",
      // },
      // NavbarGroup
      {
        text: "JavaScript",
        link: "/js/",
        children: [
          {
            text: "Function",
            link: "/js/function/",
          },
          {
            text: "Array",
            link: "/js/array/",
          },
        ],
      },
    ],
  }),
  plugins: [searchPlugin({})],
});
