import { NextRequest } from 'next/server'
import { locales } from '@/i18n/locales' // Replace with your locales configuration path
import { intlMiddleware } from './middlewares/intlMiddleware'
import { authMiddleware } from './middlewares/authMiddleware'
import { publicRoutes } from './routes'

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^/(${locales.join('|')})?(${publicRoutes.flatMap(p => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i'
  )

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req) // Apply internationalization for public pages
  } else {
    const ctx = {} // Define your context based on your app's needs
    return authMiddleware(req, ctx) // Apply authentication logic for non-public pages
  }
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
