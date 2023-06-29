import '../styles/index.css'
import { Wheel } from 'https://cdn.jsdelivr.net/npm/spin-wheel@4.1.1/dist/spin-wheel-esm.js'

const props = {
  items: [
    {
      label: 'one',
    },
    {
      label: 'two',
    },
    {
      label: 'three',
    },
  ],
}

export default function SpinningWheel() {
  const wheel = new Wheel(container, props)

  return (
    <>
      <div className="container"></div>
    </>
  )
}
