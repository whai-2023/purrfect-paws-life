import catImage from '/catProfileimage/cat.png'
import fish from '/fish/fish.png'
import catTower from '/catTower/catTower.png'
import '../styles/scoreboard.css'

import useGameStore from '../gameStore'

interface ImageRepeaterProps {
  imageSource: string
  count: number
}

export default function Scoreboard() {
  const { players } = useGameStore()

  function treatsImageRepeat() {
    return [...Array(players[0].treats)].map(() => {
      return <img className="fishImage" src={fish}></img>
    })
  }

  function housesImageRepeat() {
    return [...Array(players[0].catTower)].map(() => {
      return <img className="catTower" src={catTower}></img>
    })
  }

  return (
    <div id="profile">
      <div className="item">
        <img className="image" src={catImage}></img>
        <h3 className="name">{players[0].name}</h3>
      </div>
      <div className="info">
        <div className="child1">
          Treats
          <br />
          {treatsImageRepeat()}
        </div>
        <div className="child2">
          Houses
          {housesImageRepeat()}
        </div>
      </div>
    </div>
  )
}
