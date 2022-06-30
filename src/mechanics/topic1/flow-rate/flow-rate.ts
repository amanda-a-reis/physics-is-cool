import { InvalidValue } from '../../../errors/errors'

export class CalculateFlowRate {
  calculateFlow (velocity: number, area: number): number {
    const flowRate = velocity * area
    return flowRate
  }

  calculateEqContinuity (variables: any): number | Error {
    const index = variables.indexOf('x')

    if (index === 0) {
      if (variables[1] === 0) return new InvalidValue(0)
      const area1 = (variables[2] * variables[3]) / variables[1]
      return area1
    }
    if (index === 1) {
      if (variables[0] === 0) return new InvalidValue(0)
      const velocity1 = ((variables[2] * variables[3])) / variables[0]
      return velocity1
    }
    if (index === 2) {
      if (variables[3] === 0) return new InvalidValue(0)
      const area2 = ((variables[0] * variables[1])) / variables[3]
      return area2
    }
    if (index === 3) {
      if (variables[2] === 0) return new InvalidValue(0)
      const velocity2 = ((variables[0] * variables[1])) / variables[2]
      return velocity2
    }
  }
}
