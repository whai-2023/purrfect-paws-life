import { getAllYellowPawPrints } from '../apis'
import YellowPawPrint from '../../models/YellowPawPrint'

export default async function getShuffledYellowPawPrintData() {
  const shuffledYellowPawPrintData = shufflePawPrintData(
    await getAllYellowPawPrints()
  )
  return shuffledYellowPawPrintData
}

function shufflePawPrintData(array: YellowPawPrint[]) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
