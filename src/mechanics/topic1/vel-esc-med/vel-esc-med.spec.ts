import { CalcMediumVelocity } from './vel-esc-med'
import { InvalidValue } from '../../../errors/errors'

describe('Medium scalar velocity', () => {
  test('Shold return the correrct value for velocity given the distance and time in m/s', () => {
    const sut = new CalcMediumVelocity()
    const mediuScalarVelocity = sut.calculateVelocity(500, 8)
    const RESULT = 62.5
    expect(mediuScalarVelocity).toBe(RESULT)
  })
  test('Shold return the correrct value for distance given the velocity and time', () => {
    const sut = new CalcMediumVelocity()
    const distance = sut.calculateDistance(62.5, 8)
    const RESULT = 500
    expect(distance).toBe(RESULT)
  })
  test('Shold return the correrct value for time given the velocity and distance', () => {
    const sut = new CalcMediumVelocity()
    const distance = sut.calculateTime(62.5, 500)
    const RESULT = 8
    expect(distance).toBe(RESULT)
  })
  test('Shold return an error message if time < 0 (for velocity)', () => {
    const sut = new CalcMediumVelocity()
    const time = Math.random() * -10
    expect(sut.calculateVelocity(500, time)).toEqual(new InvalidValue(time))
  })
  test('Shold return an error message if time < 0 (for distance)', () => {
    const sut = new CalcMediumVelocity()
    const time = Math.random() * -10
    expect(sut.calculateDistance(60, time)).toEqual(new InvalidValue(time))
  })
  test('Shold return an error message if velocity = 0', () => {
    const sut = new CalcMediumVelocity()
    const velocity = 0
    expect(sut.calculateTime(0, 500)).toEqual(new InvalidValue(velocity))
  })
  test('Shold verify if the unity is km/h and return its value in m/s expecting certain velocity', () => {
    const sut = new CalcMediumVelocity()
    const velocity = sut.calculateVelocity(72, 1, 'km/h')
    expect(velocity).toBe(20)
  })
  test('Shold verify if the unity is km/h and return its value in m/s expecting certain distance', () => {
    const sut = new CalcMediumVelocity()
    const time = sut.calculateDistance(72, 1, 'km/h')
    expect(time).toBe(72000)
  })
  test('Shold verify if the unity is km/h and return its value in m/s expecting certain time', () => {
    const sut = new CalcMediumVelocity()
    const time = sut.calculateTime(72, 72, 'km/h')
    expect(time).toBe(3600)
  })
})
