'use client'

import { createContext, useRef, FC } from 'react'
import { ThemeProvider as OriginalThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { ClientProvidersProps, MainStoreApi } from './types'
import { createMainStore } from '@/context/store'

const ThemeProvider = OriginalThemeProvider as FC<ThemeProviderProps>

export const MainStoreContext = createContext<MainStoreApi | undefined>(undefined)

export const ClientProviders = ({ children, ...props }: ClientProvidersProps) => {
  const storeRef = useRef<MainStoreApi | null>(null)

  if (!storeRef.current) {
    storeRef.current = createMainStore()
  }

  return (
    <MainStoreContext.Provider value={storeRef.current}>
      <ThemeProvider {...props} disableTransitionOnChange enableSystem attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
    </MainStoreContext.Provider>
  )
}
