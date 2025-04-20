import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccessPointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
}
class AccessPointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accesspoint',
  `arn:${string}:s3:${string}:${string}:accesspoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accesspoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointName: string
  constructor(parameters: AccessPointArnParameters<Partition>) {
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
export type { AccessPointArn }
export function accessPointArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessPointArnParameters<Partition>,
) {
  return new AccessPointArn<Partition>(parameters)
}

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly bucketName: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bucket',
  `arn:${string}:s3:::${string}`
> {
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
export function bucketArn<Partition extends ArnPartition = 'aws'>(
  parameters: BucketArnParameters<Partition>,
) {
  return new BucketArn<Partition>(parameters)
}

export interface ObjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly bucketName: string
  readonly objectName: string
}
class ObjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'object',
  `arn:${string}:s3:::${string}/${string}`
> {
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
export function objectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ObjectArnParameters<Partition>,
) {
  return new ObjectArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:s3:${string}:${string}:job/${string}`
> {
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
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface StorageLensConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configId: string
}
class StorageLensConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'storagelensconfiguration',
  `arn:${string}:s3:${string}:${string}:storage-lens/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'storagelensconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configId: string
  constructor(parameters: StorageLensConfigurationArnParameters<Partition>) {
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
export type { StorageLensConfigurationArn }
export function storageLensConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: StorageLensConfigurationArnParameters<Partition>) {
  return new StorageLensConfigurationArn<Partition>(parameters)
}

export interface StorageLensGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class StorageLensGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'storagelensgroup',
  `arn:${string}:s3:${string}:${string}:storage-lens-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'storagelensgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: StorageLensGroupArnParameters<Partition>) {
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
export type { StorageLensGroupArn }
export function storageLensGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: StorageLensGroupArnParameters<Partition>,
) {
  return new StorageLensGroupArn<Partition>(parameters)
}

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

export interface MultiRegionAccessPointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly accessPointAlias: string
}
class MultiRegionAccessPointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'multiregionaccesspoint',
  `arn:${string}:s3::${string}:accesspoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'multiregionaccesspoint' as const
  readonly partition: Partition
  readonly account: string
  readonly accessPointAlias: string
  constructor(parameters: MultiRegionAccessPointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.accessPointAlias = parameters.accessPointAlias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3::${this.account}:accesspoint/${this.accessPointAlias}` as const
  }
}
export type { MultiRegionAccessPointArn }
export function multiRegionAccessPointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MultiRegionAccessPointArnParameters<Partition>) {
  return new MultiRegionAccessPointArn<Partition>(parameters)
}

export interface MultiRegionAccessPointRequestArnArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly operation: string
  readonly token: string
}
class MultiRegionAccessPointRequestArnArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'multiregionaccesspointrequestarn',
  `arn:${string}:s3:us-west-2:${string}:async-request/mrap/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'multiregionaccesspointrequestarn' as const
  readonly partition: Partition
  readonly account: string
  readonly operation: string
  readonly token: string
  constructor(
    parameters: MultiRegionAccessPointRequestArnArnParameters<Partition>,
  ) {
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
export type { MultiRegionAccessPointRequestArnArn }
export function multiRegionAccessPointRequestArnArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MultiRegionAccessPointRequestArnArnParameters<Partition>) {
  return new MultiRegionAccessPointRequestArnArn<Partition>(parameters)
}

export interface AccessGrantsInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class AccessGrantsInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accessgrantsinstance',
  `arn:${string}:s3:${string}:${string}:access-grants/default`
> {
  readonly [ArnResourceTypeBrand] = 'accessgrantsinstance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: AccessGrantsInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:access-grants/default` as const
  }
}
export type { AccessGrantsInstanceArn }
export function accessGrantsInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessGrantsInstanceArnParameters<Partition>,
) {
  return new AccessGrantsInstanceArn<Partition>(parameters)
}

export interface AccessGrantsLocationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
}
class AccessGrantsLocationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accessgrantslocation',
  `arn:${string}:s3:${string}:${string}:access-grants/default/location/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accessgrantslocation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
  constructor(parameters: AccessGrantsLocationArnParameters<Partition>) {
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
export type { AccessGrantsLocationArn }
export function accessGrantsLocationArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessGrantsLocationArnParameters<Partition>,
) {
  return new AccessGrantsLocationArn<Partition>(parameters)
}

export interface AccessGrantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
}
class AccessGrantArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accessgrant',
  `arn:${string}:s3:${string}:${string}:access-grants/default/grant/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accessgrant' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly token: string
  constructor(parameters: AccessGrantArnParameters<Partition>) {
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
export type { AccessGrantArn }
export function accessGrantArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessGrantArnParameters<Partition>,
) {
  return new AccessGrantArn<Partition>(parameters)
}
