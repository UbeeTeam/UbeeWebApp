declare module 'vue-tel-input' {
  import { App, DefineComponent, Plugin } from 'vue'

  const plugin: Plugin
  export default plugin

  export const VueTelInput: DefineComponent<{}, {}, any>
}
