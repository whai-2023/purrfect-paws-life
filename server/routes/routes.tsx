import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from '../../client/components/App'
import Landing from '../../client/components/Landing'
// import Game from './components/Game'
// import ChooseCharacterPage from './components/ChooseCharacterPage'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      {/* <Route path="character/game" element={<Game />} /> */}
    </Route>
  )
)
