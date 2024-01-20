/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  PROD: boolean;
  DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export {};
