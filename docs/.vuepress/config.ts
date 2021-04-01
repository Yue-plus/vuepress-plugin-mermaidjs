import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'vuepress-plugin-mermaidjs',
  description: 'Easy Diagramming for VuePress with mermaidjs',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },

  plugins: ['../src/index.js']
})