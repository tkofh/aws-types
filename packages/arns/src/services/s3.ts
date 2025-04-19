import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AccesspointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
}
class AccesspointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'accesspoint', `arn:${string}:s3:${string}:${string}:accesspoint/${string}`> {
  readonly [ArnResourceTypeBrand] = 'accesspoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
  constructor(parameters: AccesspointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.accessPointName = parameters.accessPointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:accesspoint/${this.accessPointName}` as const
  }
}
export type { AccesspointArn }
export function accesspointArn<Partition extends ArnPartition = 'aws'>(parameters: AccesspointArnParameters<Partition>) {
  return new AccesspointArn<Partition>(parameters)
}

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly bucketName: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'bucket', `arn:${string}:s3:::${string}`> {
  readonly [ArnResourceTypeBrand] = 'bucket' as const
  readonly partition: Partition
  readonly bucketName: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.bucketName = parameters.bucketName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:::${this.bucketName}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(parameters: BucketArnParameters<Partition>) {
  return new BucketArn<Partition>(parameters)
}

export interface ObjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly bucketName: string
  readonly objectName: string
}
class ObjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'object', `arn:${string}:s3:::${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'object' as const
  readonly partition: Partition
  readonly bucketName: string
  readonly objectName: string
  constructor(parameters: ObjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.bucketName = parameters.bucketName
    this.objectName = parameters.objectName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:::${this.bucketName}/${this.objectName}` as const
  }
}
export type { ObjectArn }
export function objectArn<Partition extends ArnPartition = 'aws'>(parameters: ObjectArnParameters<Partition>) {
  return new ObjectArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'job', `arn:${string}:s3:${string}:${string}:job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:job/${this.jobId}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(parameters: JobArnParameters<Partition>) {
  return new JobArn<Partition>(parameters)
}

export interface StoragelensconfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configId: string
}
class StoragelensconfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'storagelensconfiguration', `arn:${string}:s3:${string}:${string}:storage-lens/${string}`> {
  readonly [ArnResourceTypeBrand] = 'storagelensconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configId: string
  constructor(parameters: StoragelensconfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configId = parameters.configId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:storage-lens/${this.configId}` as const
  }
}
export type { StoragelensconfigurationArn }
export function storagelensconfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: StoragelensconfigurationArnParameters<Partition>) {
  return new StoragelensconfigurationArn<Partition>(parameters)
}

export interface StoragelensgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class StoragelensgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'storagelensgroup', `arn:${string}:s3:${string}:${string}:storage-lens-group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'storagelensgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: StoragelensgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:storage-lens-group/${this.name}` as const
  }
}
export type { StoragelensgroupArn }
export function storagelensgroupArn<Partition extends ArnPartition = 'aws'>(parameters: StoragelensgroupArnParameters<Partition>) {
  return new StoragelensgroupArn<Partition>(parameters)
}

export interface ObjectlambdaaccesspointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
}
class ObjectlambdaaccesspointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'objectlambdaaccesspoint', `arn:${string}:s3-object-lambda:${string}:${string}:accesspoint/${string}`> {
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
export function objectlambdaaccesspointArn<Partition extends ArnPartition = 'aws'>(parameters: ObjectlambdaaccesspointArnParameters<Partition>) {
  return new ObjectlambdaaccesspointArn<Partition>(parameters)
}

export interface MultiregionaccesspointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly accessPointAlias: string
}
class MultiregionaccesspointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'multiregionaccesspoint', `arn:${string}:s3::${string}:accesspoint/${string}`> {
  readonly [ArnResourceTypeBrand] = 'multiregionaccesspoint' as const
  readonly partition: Partition
  readonly account: string
  readonly accessPointAlias: string
  constructor(parameters: MultiregionaccesspointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.accessPointAlias = parameters.accessPointAlias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3::${this.account}:accesspoint/${this.accessPointAlias}` as const
  }
}
export type { MultiregionaccesspointArn }
export function multiregionaccesspointArn<Partition extends ArnPartition = 'aws'>(parameters: MultiregionaccesspointArnParameters<Partition>) {
  return new MultiregionaccesspointArn<Partition>(parameters)
}

export interface MultiregionaccesspointrequestarnArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly operation: string
  readonly token: string
}
class MultiregionaccesspointrequestarnArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'multiregionaccesspointrequestarn', `arn:${string}:s3:us-west-2:${string}:async-request/mrap/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'multiregionaccesspointrequestarn' as const
  readonly partition: Partition
  readonly account: string
  readonly operation: string
  readonly token: string
  constructor(parameters: MultiregionaccesspointrequestarnArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.operation = parameters.operation
    this.token = parameters.token
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:us-west-2:${this.account}:async-request/mrap/${this.operation}/${this.token}` as const
  }
}
export type { MultiregionaccesspointrequestarnArn }
export function multiregionaccesspointrequestarnArn<Partition extends ArnPartition = 'aws'>(parameters: MultiregionaccesspointrequestarnArnParameters<Partition>) {
  return new MultiregionaccesspointrequestarnArn<Partition>(parameters)
}

export interface AccessgrantsinstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class AccessgrantsinstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'accessgrantsinstance', `arn:${string}:s3:${string}:${string}:access-grants/default`> {
  readonly [ArnResourceTypeBrand] = 'accessgrantsinstance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: AccessgrantsinstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:access-grants/default` as const
  }
}
export type { AccessgrantsinstanceArn }
export function accessgrantsinstanceArn<Partition extends ArnPartition = 'aws'>(parameters: AccessgrantsinstanceArnParameters<Partition>) {
  return new AccessgrantsinstanceArn<Partition>(parameters)
}

export interface AccessgrantslocationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
}
class AccessgrantslocationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'accessgrantslocation', `arn:${string}:s3:${string}:${string}:access-grants/default/location/${string}`> {
  readonly [ArnResourceTypeBrand] = 'accessgrantslocation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
  constructor(parameters: AccessgrantslocationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.token = parameters.token
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:access-grants/default/location/${this.token}` as const
  }
}
export type { AccessgrantslocationArn }
export function accessgrantslocationArn<Partition extends ArnPartition = 'aws'>(parameters: AccessgrantslocationArnParameters<Partition>) {
  return new AccessgrantslocationArn<Partition>(parameters)
}

export interface AccessgrantArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
}
class AccessgrantArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'accessgrant', `arn:${string}:s3:${string}:${string}:access-grants/default/grant/${string}`> {
  readonly [ArnResourceTypeBrand] = 'accessgrant' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
  constructor(parameters: AccessgrantArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.token = parameters.token
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:access-grants/default/grant/${this.token}` as const
  }
}
export type { AccessgrantArn }
export function accessgrantArn<Partition extends ArnPartition = 'aws'>(parameters: AccessgrantArnParameters<Partition>) {
  return new AccessgrantArn<Partition>(parameters)
}