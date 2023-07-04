import { useState, useEffect } from 'react'
import YellowSquare from '../../models/YellowSquare'

type PopupProps = {
  content: YellowSquare
}

function PopUp(props: PopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [props.content])

  return (
    <>
      {isOpen && (
        <div className="Popup-container">
          <div className="Popup">
            <div>{`${props.content.input} You get ${props.content.value} treats!`}</div>
            <button className="PopupButton" onClick={() => setIsOpen(false)}>
              Close Pop-up
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PopUp
