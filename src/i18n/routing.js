import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ru', 'th', 'de', 'fr', 'ja', 'zh', 'ko', 'it'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: false
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

