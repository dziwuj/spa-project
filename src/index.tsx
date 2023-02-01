import { createRoot } from 'react-dom/client'
import { createContext } from 'react'
import { App } from './App'
import { rootStore } from 'stores/Root.store'

import 'styles/main.scss'

export const StoreContext = createContext(rootStore)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <StoreContext.Provider value={rootStore}>
    <App />
  </StoreContext.Provider>
)
