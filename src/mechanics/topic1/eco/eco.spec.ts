import { InvalidValue } from '../../../errors/errors'
import { CalculateEco } from './eco'

describe('The sound of eco', () => {
  test('Should calculate the smaller distance to hear the eco', () => {
    const sut = new CalculateEco()
    const distance = sut.calculateEcoDistance(340, 0.1)
    const distanceReal = 17
    expect(distance).toBe(distanceReal)
  })
  test('Should calculate the distance for something falling and returning an eco', () => {
    const sut = new CalculateEco()
    const distance = sut.calculateEcoFalling(12.8, 320, 2.6)
    const distanceReal = 32
    expect(distance).toBe(distanceReal)
  })
  test('Should return an error if the sum of velocities is zero', () => {
    const sut = new CalculateEco()
    const distance = sut.calculateEcoFalling(0, 0, 2.6)
    expect(distance).toEqual(new InvalidValue(0))
  })
  test('Should return an error if the of velocities is smaller than zero', () => {
    const sut = new CalculateEco()
    const distance = sut.calculateEcoDistance(320, -1)
    expect(distance).toEqual(new InvalidValue(-1))
  })
})
