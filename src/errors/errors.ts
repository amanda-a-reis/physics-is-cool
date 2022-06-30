export class InvalidValue extends Error {
  constructor (time: number) {
    super(`Invalid param ${time}, it must bem larger then 0`)
    this.name = 'InvalidParamError'
  }
}
