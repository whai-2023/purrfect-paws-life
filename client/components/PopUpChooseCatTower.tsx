import { useState, useEffect } from 'react'
import useGameStore from '../gameStore'
import { CatTower } from '../../models/CatTower'

type PopupProps = {
  catTowers: CatTower[]
}

function PopUpChooseCatTower(props: PopupProps) {
  const { players, activePlayer, setCatTower } = useGameStore()

  const [isOpen, setIsOpen] = useState(false)

  const handleChoiceSelection = (catTower: CatTower) => {
    setCatTower(catTower)
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [props.catTowers])

  return (
    <>
      {isOpen && (
        <div className="Popup-container">
          <div className="Popup">
            <div>{`${
              players[activePlayer - 1].name
            }, please choose from these potential cat tower investment oppurtinities!`}</div>
            <div>
              {props.catTowers.map((catTower) => (
                <button
                  className="PopupButton"
                  onClick={() => handleChoiceSelection(catTower)}
                >
                  {`${catTower.material} earns ${catTower.value} treats per pay`}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopUpChooseCatTower
