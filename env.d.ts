/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_ACCESS_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '@/assets/images/*.png' {
  const value: string
  export default value
}

declare module '@/assets/images/*.jpg' {
  const value: string
  export default value
}

declare module '@/assets/images/*.jpeg' {
  const value: string
  export default value
}

declare module '@/assets/images/*.svg' {
  const value: string
  export default value
}
