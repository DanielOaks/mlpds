/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

interface ImportMetaEnv {
  readonly MLPDS_CLIENT_BACKEND_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// see https://github.com/antfu/vite-plugin-md#typescript-shim
declare module '*.md' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
