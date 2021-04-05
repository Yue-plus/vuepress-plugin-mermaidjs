import type { Plugin } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const mermaidPlugin = () => {
    return {
        name: 'vuepress-plugin-mermaidjs',
        multiple: false,
        plugins: [
            [require('./mermaid'), false],
            [require('./markdownItPlugin'), false]
        ]
    }
}

export default mermaidPlugin();