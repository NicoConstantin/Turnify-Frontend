import { createMainStore } from '@/context/store'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { type ReactNode } from 'react'

export type MainStoreApi = ReturnType<typeof createMainStore>

export interface ClientProvidersProps extends ThemeProviderProps {
  children: ReactNode
}

export type Messages = { [key: string]: string }
