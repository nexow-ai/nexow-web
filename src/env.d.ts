/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly X_URL?: string;
  readonly DISCORD_URL?: string;
  readonly TELEGRAM_URL?: string;
  readonly TIKTOK_URL?: string;
  readonly INSTAGRAM_URL?: string;
  readonly LINKEDIN_URL?: string;
  readonly YOUTUBE_URL?: string;
  readonly SKOOL_URL?: string;
  readonly GITHUB_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
