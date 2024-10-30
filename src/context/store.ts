import { createStore } from 'zustand/vanilla'
import { MainStore, MainStoreState } from './types'

export const defaultInitState: MainStoreState = {
  // count: 0, | Example Code, delete after use it
}

export const createMainStore = (initState: MainStoreState = defaultInitState) => {
  return createStore<MainStore>()(set => ({
    ...initState,
    // incrementCount: () => set(state => ({ count: state.count + 1 })), | Example Code, delete after use it
  }))
}
