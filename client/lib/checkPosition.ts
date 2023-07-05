import { PlayerState } from '../../models/PlayerState'

export default function checkPosition(player: PlayerState, roll: number) {
  console.log('I work!')
  console.log(player)
  let position = player.moveTotal
  let path = player.path
  if (path === 1) {
    if (position >= 5 && position < 8) {
      roll = roll + position > 8 ? (roll = 8 - position) : roll
    } else if (position >= 10 && position < 13) {
      roll = roll + position > 13 ? (roll = 13 - position) : roll
    } else if (position >= 14 && position < 17) {
      roll = roll + position > 17 ? (roll = 17 - position) : roll
    } else if (position >= 14 && position < 17) {
      roll = roll + position > 17 ? (roll = 17 - position) : roll
    } else if (position >= 20 && position < 23) {
      roll = roll + position > 23 ? (roll = 23 - position) : roll
    } else if (position >= 26 && position < 29) {
      roll = roll + position > 29 ? (roll = 29 - position) : roll
    }
  } else if (path === 2) {
    if (position >= 2 && position < 5) {
      let leftover = 0
      roll + position > 5 ? (leftover = roll + position - 5) : roll
      position = 11 + leftover
      path = 1
    } else if (position >= 8 && position < 11) {
      let leftover = 0
      roll + position > 11 ? (leftover = roll + position - 11) : roll
      position = 20 + leftover
      path = 1
    } else if (position >= 16 && position < 19) {
      let leftover = 0
      roll + position > 19 ? (leftover = roll + position - 19) : roll
      position = 28 + leftover
      path = 1
    }
  }
  console.log(path, position + roll)
}
