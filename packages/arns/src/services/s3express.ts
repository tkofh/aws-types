import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBucket: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bucket',
  `arn:${string}:s3express:${string}:${string}:bucket/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bucket' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBucket: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBucket = parameters.nameBucket
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3express:${this.region}:${this.account}:bucket/${this.nameBucket}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(
  parameters: BucketArnParameters<Partition>,
) {
  return new BucketArn<Partition>(parameters)
}
