import { useState, useEffect } from 'react'
import { Choices } from '../../models/Choices'
import useGameStore from '../gameStore'

type PopupProps = {
  choiceType: string
  content: string
  button1: string
  button2: string
}

function PopUpChoice(props: PopupProps) {
  const { setPath, setChoice } = useGameStore()

  const [isOpen, setIsOpen] = useState(false)

  const handleChoiceSelection = (choice: number, yesOrNo: string) => {
    setChoice(props.choiceType.split(' ')[1] as keyof Choices, yesOrNo)
    setPath(choice)
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(true)
  }, [props.content])

  return (
    <>
      {isOpen && (
        <div className="Popup-container">
          <div className="Popup">
            <div>{props.content}</div>
            <div>
              <button
                className="PopupButton"
                onClick={() => handleChoiceSelection(1, 'yes')}
              >
                {props.button1}
              </button>
              <button
                className="PopupButton"
                onClick={() => handleChoiceSelection(2, 'no')}
              >
                {props.button2}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopUpChoice
