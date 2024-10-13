/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MD_SOURCE: "local" | "cloudinary";
  readonly VITE_MD_PATH?: string;
  readonly VITE_MD_CLOUDINARY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
