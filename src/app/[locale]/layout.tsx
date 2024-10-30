import { ClientProviders } from '@/providers/ClientProviders'
import ServerProviders from '@/providers/ServerProviders'
import type { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import './globals.css'
import { ParamsRootLayout } from './types'
import { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Turnify',
  description: 'The Easiest Appointment Scheduling Tool',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: ParamsRootLayout
}>) {
  const { locale } = await params

  const messages = await getMessages()

  return (
    <html suppressHydrationWarning lang={locale}>
      {/* Remove  suppressHydrationWarning before go on prod*/}
      <body className={`${inter.className} antialiased`}>
        <ServerProviders messages={messages}>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
      </body>
    </html>
  )
}
