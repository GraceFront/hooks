import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'GraceFront Hooks',
  description: '一个现代化的 React Hooks 工具库，支持 TypeScript',

  base: '/hooks/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/guide/use-latest' },
          { text: 'GitHub', link: 'https://github.com/GraceFront/hooks' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Hooks',
              items: [
                { text: 'useLatest', link: '/guide/use-latest' },
                {
                  text: 'useUnmount',
                  link: '/guide/use-unmount',
                },
                {
                  text: 'useMount',
                  link: '/guide/use-mount',
                },
              ],
            },
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/use-latest' },
          { text: 'GitHub', link: 'https://github.com/GraceFront/hooks' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Hooks',
              items: [
                { text: 'useLatest', link: '/en/guide/use-latest' },
                {
                  text: 'useUnmount',
                  link: '/en/guide/use-unmount',
                },
                {
                  text: 'useMount',
                  link: '/en/guide/use-mount',
                },
              ],
            },
          ],
        },
      },
    },
  },
})
