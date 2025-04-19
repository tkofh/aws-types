import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ObjectlambdaaccesspointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
}
class ObjectlambdaaccesspointArn<
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
  constructor(parameters: ObjectlambdaaccesspointArnParameters<Partition>) {
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
export type { ObjectlambdaaccesspointArn }
export function objectlambdaaccesspointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ObjectlambdaaccesspointArnParameters<Partition>) {
  return new ObjectlambdaaccesspointArn<Partition>(parameters)
}
