/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USE_API: boolean
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
