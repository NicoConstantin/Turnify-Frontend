import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export default function ServerProviders({
  children,
  messages,
}: Readonly<{ children: ReactNode; messages: AbstractIntlMessages }>) {
  return (
    <SessionProvider>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </SessionProvider>
  )
}
