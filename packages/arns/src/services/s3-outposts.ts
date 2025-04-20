import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PointAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly namePointAccess: string
}
class PointAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accesspoint',
  `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/accesspoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accesspoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly namePointAccess: string
  constructor(parameters: PointAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOutpost = parameters.idOutpost
    this.namePointAccess = parameters.namePointAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.idOutpost}/accesspoint/${this.namePointAccess}` as const
  }
}
export type { PointAccessArn }
export function pointAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: PointAccessArnParameters<Partition>,
) {
  return new PointAccessArn<Partition>(parameters)
}

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly nameBucket: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bucket',
  `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/bucket/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bucket' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly nameBucket: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOutpost = parameters.idOutpost
    this.nameBucket = parameters.nameBucket
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.idOutpost}/bucket/${this.nameBucket}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(
  parameters: BucketArnParameters<Partition>,
) {
  return new BucketArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly idEndpoint: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly idEndpoint: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOutpost = parameters.idOutpost
    this.idEndpoint = parameters.idEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.idOutpost}/endpoint/${this.idEndpoint}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}

export interface ObjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly nameBucket: string
  readonly nameObject: string
}
class ObjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'object',
  `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/bucket/${string}/object/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'object' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  readonly nameBucket: string
  readonly nameObject: string
  constructor(parameters: ObjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOutpost = parameters.idOutpost
    this.nameBucket = parameters.nameBucket
    this.nameObject = parameters.nameObject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.idOutpost}/bucket/${this.nameBucket}/object/${this.nameObject}` as const
  }
}
export type { ObjectArn }
export function objectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ObjectArnParameters<Partition>,
) {
  return new ObjectArn<Partition>(parameters)
}
