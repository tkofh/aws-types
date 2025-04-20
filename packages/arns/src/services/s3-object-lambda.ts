import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ObjectLambdaAccessPointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
}
class ObjectLambdaAccessPointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'objectlambdaaccesspoint',
  `arn:${string}:s3-object-lambda:${string}:${string}:accesspoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'objectlambdaaccesspoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
  constructor(parameters: ObjectLambdaAccessPointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.accessPointName = parameters.accessPointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-object-lambda:${this.region}:${this.account}:accesspoint/${this.accessPointName}` as const
  }
}
export type { ObjectLambdaAccessPointArn }
export function objectLambdaAccessPointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ObjectLambdaAccessPointArnParameters<Partition>) {
  return new ObjectLambdaAccessPointArn<Partition>(parameters)
}
