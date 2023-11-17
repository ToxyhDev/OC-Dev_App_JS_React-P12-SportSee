/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_API: boolean
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
