import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PointAccessLambdaObjectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePointAccess: string
}
class PointAccessLambdaObjectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'objectlambdaaccesspoint',
  `arn:${string}:s3-object-lambda:${string}:${string}:accesspoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'objectlambdaaccesspoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePointAccess: string
  constructor(parameters: PointAccessLambdaObjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePointAccess = parameters.namePointAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-object-lambda:${this.region}:${this.account}:accesspoint/${this.namePointAccess}` as const
  }
}
export type { PointAccessLambdaObjectArn }
export function pointAccessLambdaObjectArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PointAccessLambdaObjectArnParameters<Partition>) {
  return new PointAccessLambdaObjectArn<Partition>(parameters)
}
