import { useState, useEffect } from 'react'
import YellowSquare from '../../models/YellowSquare'

type PopupProps = {
  content: YellowSquare
}

function PopUp(props: PopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // it seems finnicky relying on props.content to change to show this popup
    setIsOpen(true)
  }, [props.content])

  return (
    <div className="Popup">
      {isOpen && (
        <div>
          <div>{`${props.content.input} You get ${props.content.value} treats!`}</div>
          <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
        </div>
      )}
    </div>
  )
}

export default PopUp
