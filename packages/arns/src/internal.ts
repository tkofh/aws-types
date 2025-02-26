export const StringifyArnBrand: unique symbol = Symbol.for('@aws-types/arns/~/StringifyArn')
export type StringifyArnBrand = typeof StringifyArnBrand

export const ArnResourceTypeBrand: unique symbol = Symbol.for('@aws-types/arns/~/ArnResourceType')
export type ArnResourceTypeBrand = typeof ArnResourceTypeBrand

export interface Arn<T extends string, P extends string> {
  readonly [ArnResourceTypeBrand]: T
  [Symbol.toPrimitive](): P
  toString(): P
}

export abstract class InternalArn<T extends string, P extends string> implements Arn<T, P> {

  abstract readonly [ArnResourceTypeBrand]: T

  abstract [StringifyArnBrand](): P

  [Symbol.toPrimitive]() {
    return this[StringifyArnBrand]()
  }

  toString() {
    return this[StringifyArnBrand]()
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `${this[ArnResourceTypeBrand]}<${this[StringifyArnBrand]()}>`
  }

}