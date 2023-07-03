import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Landing from './components/Landing'
import GameBoard from './components/GameBoard'
// purrrrrrrrge the comment
// import ChooseCharacterPage from './components/ChooseCharacterPage'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/game" element={<GameBoard />} />
      {/* <Route path="character/game" element={<Game />} /> */}
    </Route>
  )
)
