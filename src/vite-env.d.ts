/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_BETA_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
