import { InvalidValue } from '../../../errors/errors'

export class CalcMediumVelocity {
  calculateVelocity (distance: number, time: number, unity: string = 'm/s'): number| Error {
    if (time < 0) {
      return new InvalidValue(time)
    }

    if (unity === 'km/h') {
      const mediuScalarVelocity = distance / time
      return mediuScalarVelocity / 3.6
    }

    if (unity === 'm/s') {
      const mediuScalarVelocity = distance / time
      return mediuScalarVelocity
    }
  }

  calculateDistance (velocity: number, time: number, unity: string = 'm/s'): number| Error {
    if (time < 0) {
      return new InvalidValue(time)
    }

    if (unity === 'km/h') {
      const distance = velocity * time
      return distance * 1000
    }

    if (unity === 'm/s') {
      const distance = velocity * time
      return distance
    }
  }

  calculateTime (velocity: number, distance: number, unity: string = 'm/s'): number| Error {
    if (velocity === 0) {
      return new InvalidValue(velocity)
    }

    if (unity === 'km/h') {
      const time = distance / velocity
      return time * 3600
    }

    if (unity === 'm/s') {
      const time = distance / velocity
      return time
    }
  }
}
