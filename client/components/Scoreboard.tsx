import catImage from '../public/catProfileimage/cat.png'
import fish from '../public/fish/fish.png'
import catTower from '../public/catTower/catTower.png'
import '../styles/scoreboard.css'

export default function Scoreboard() {
  return (
    <div id="profile">
      <div className="item">
        <img className="image" src={catImage}></img>
        <h3 className="name">Name</h3>
      </div>
      <div className="info">
        <div className="child1">
          Treats
          <br />
          <img className="fishImage" src={fish}></img>
        </div>
        <div className="child2">
          Houses
          <img className="catTower" src={catTower}></img>
        </div>
      </div>
    </div>
  )
}
