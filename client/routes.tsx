import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Landing from './components/Landing'
import GameBoard from './components/GameBoard'
import WinningPage from './components/WinningPage'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/game" element={<GameBoard />} />
      <Route path="/winner" element={<WinningPage />} />
    </Route>
  )
)
