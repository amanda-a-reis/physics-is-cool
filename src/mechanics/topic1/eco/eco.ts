import { InvalidValue } from '../../../errors/errors'

export class CalculateEco {
  calculateEcoDistance (velocity: number, time: number): number | Error {
    if (time < 0) {
      return new InvalidValue(time)
    }

    const distance = velocity * (time / 2)
    return distance
  }

  calculateEcoFalling (velFalling: number, velSound: number, time: number): number | Error {
    if ((velFalling + velSound === 0)) {
      return new InvalidValue(0)
    }

    const distance = (time * (velFalling * velSound)) / (velFalling + velSound)
    return distance
  }
}
