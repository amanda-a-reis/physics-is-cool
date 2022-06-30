import { InvalidValue } from '../../../errors/errors'
import { CalculateFlowRate } from './flow-rate'

describe('Calcule the formulas for flow-rate', () => {
  test('Should calculate the flow-rate given a certain area end velocity of the liquid', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateFlow(4, 1.5)
    const flowRateCorrect = 6
    expect(flowRate).toBe(flowRateCorrect)
  })
  test('Should calculate the flow-rate based on the Continuity equation: given an array', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity([36, 12, 9, 'x'])
    const correctVelocity = 48
    expect(flowRate).toBe(correctVelocity)
  })
  test('Should calculate the flow-rate based on the Continuity equation: given an array', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity(['x', 12, 9, 48])
    const correctArea = 36
    expect(flowRate).toBe(correctArea)
  })
  test('Should calculate the flow-rate based on the Continuity equation: given an array', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity([36, 'x', 9, 48])
    const correctVelocity = 12
    expect(flowRate).toBe(correctVelocity)
  })
  test('Should calculate the flow-rate based on the Continuity equation: given an array', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity([36, 12, 'x', 48])
    const correctArea = 9
    expect(flowRate).toBe(correctArea)
  })
  test('Should return an error if values contain zero', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity(['x', 0, 9, 48])
    expect(flowRate).toEqual(new InvalidValue(0))
  })
  test('Should return an error if values contain zero', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity([0, 'x', 9, 48])
    expect(flowRate).toEqual(new InvalidValue(0))
  })
  test('Should return an error if values contain zero', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity([36, 12, 'x', 0])
    expect(flowRate).toEqual(new InvalidValue(0))
  })
  test('Should return an error if values contain zero', () => {
    const sut = new CalculateFlowRate()
    const flowRate = sut.calculateEqContinuity([36, 12, 0, 'x'])
    expect(flowRate).toEqual(new InvalidValue(0))
  })
})
