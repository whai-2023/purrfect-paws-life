import { useState, useEffect } from 'react'
import YellowPawPrint from '../../models/YellowPawPrint'

type PopupProps = {
  content: YellowPawPrint
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
