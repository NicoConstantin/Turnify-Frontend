import { MainStoreContext } from '@/providers/ClientProviders'
import { useContext } from 'react'
import { useStore } from 'zustand'

export const useMainStore = <T,>(selector: () => T): T => {
  const mainStoreContext = useContext(MainStoreContext)

  if (!mainStoreContext) {
    throw new Error(`useMainStore must be used within MainStoreProvider`)
  }

  return useStore(mainStoreContext, selector)
}
