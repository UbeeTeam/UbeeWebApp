declare module '*.vue' {
  import type { defineProps } from 'vue'
  const component: defineProps<{}, {}, any>
  export default component
}
