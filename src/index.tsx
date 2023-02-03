import { createRoot } from 'react-dom/client'
import { createContext } from 'react'
import { App } from './App'
import { rootStore } from './stores/Root.store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/main.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

export const StoreContext = createContext(rootStore)

const container =
  document.getElementById('root') || document.createElement('div')
const root = createRoot(container!)
root.render(
  <StoreContext.Provider value={rootStore}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
)
