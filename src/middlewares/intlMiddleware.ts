import createIntlMiddleware from 'next-intl/middleware'
import { locales } from '@/i18n/locales'

export const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'en',
})
