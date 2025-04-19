import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AccesspointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly accessPointName: string
}
class AccesspointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'accesspoint', `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/accesspoint/${string}`> {
  readonly [ArnResourceTypeBrand] = 'accesspoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly accessPointName: string
  constructor(parameters: AccesspointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.outpostId = parameters.outpostId
    this.accessPointName = parameters.accessPointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.outpostId}/accesspoint/${this.accessPointName}` as const
  }
}
export type { AccesspointArn }
export function accesspointArn<Partition extends ArnPartition = 'aws'>(parameters: AccesspointArnParameters<Partition>) {
  return new AccesspointArn<Partition>(parameters)
}

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly bucketName: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'bucket', `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/bucket/${string}`> {
  readonly [ArnResourceTypeBrand] = 'bucket' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly bucketName: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.outpostId = parameters.outpostId
    this.bucketName = parameters.bucketName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.outpostId}/bucket/${this.bucketName}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(parameters: BucketArnParameters<Partition>) {
  return new BucketArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly endpointId: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'endpoint', `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/endpoint/${string}`> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly endpointId: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.outpostId = parameters.outpostId
    this.endpointId = parameters.endpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.outpostId}/endpoint/${this.endpointId}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(parameters: EndpointArnParameters<Partition>) {
  return new EndpointArn<Partition>(parameters)
}

export interface ObjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly bucketName: string
  readonly objectName: string
}
class ObjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'object', `arn:${string}:s3-outposts:${string}:${string}:outpost/${string}/bucket/${string}/object/${string}`> {
  readonly [ArnResourceTypeBrand] = 'object' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  readonly bucketName: string
  readonly objectName: string
  constructor(parameters: ObjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.outpostId = parameters.outpostId
    this.bucketName = parameters.bucketName
    this.objectName = parameters.objectName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3-outposts:${this.region}:${this.account}:outpost/${this.outpostId}/bucket/${this.bucketName}/object/${this.objectName}` as const
  }
}
export type { ObjectArn }
export function objectArn<Partition extends ArnPartition = 'aws'>(parameters: ObjectArnParameters<Partition>) {
  return new ObjectArn<Partition>(parameters)
}