import { useState, useEffect } from 'react'
import useGameStore from '../gameStore'
import { Owner } from '../../models/Owner'

type PopupProps = {
  owners: Owner[]
}

function PopUpChooseOwner(props: PopupProps) {
  const { players, activePlayer, setOwner } = useGameStore()

  const [isOpen, setIsOpen] = useState(false)

  const handleChoiceSelection = (owner: Owner) => {
    setOwner(owner)
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [props.owners])

  return (
    <>
      {isOpen && (
        <div className="Popup-container">
          <div className="Popup">
            <div>{`${
              players[activePlayer - 1].name
            }, please choose from these potential owners!`}</div>
            <div>
              {props.owners.map((owner) => (
                <button
                  className="PopupButton"
                  onClick={() => handleChoiceSelection(owner)}
                >
                  {`${owner.name} earns ${owner.allowance} treats per pay`}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopUpChooseOwner
