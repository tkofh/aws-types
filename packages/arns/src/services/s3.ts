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
  readonly namePointAccess: string
}
class PointAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accesspoint',
  `arn:${string}:s3:${string}:${string}:accesspoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accesspoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePointAccess: string
  constructor(parameters: PointAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePointAccess = parameters.namePointAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:accesspoint/${this.namePointAccess}` as const
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
  readonly nameBucket: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bucket',
  `arn:${string}:s3:::${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bucket' as const
  readonly partition: string
  readonly nameBucket: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.nameBucket = parameters.nameBucket
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:::${this.nameBucket}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(
  parameters: BucketArnParameters<Partition>,
) {
  return new BucketArn<Partition>(parameters)
}

export interface ObjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly nameBucket: string
  readonly nameObject: string
}
class ObjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'object',
  `arn:${string}:s3:::${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'object' as const
  readonly partition: string
  readonly nameBucket: string
  readonly nameObject: string
  constructor(parameters: ObjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.nameBucket = parameters.nameBucket
    this.nameObject = parameters.nameObject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:::${this.nameBucket}/${this.nameObject}` as const
  }
}
export type { ObjectArn }
export function objectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ObjectArnParameters<Partition>,
) {
  return new ObjectArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:s3:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:job/${this.idJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface ConfigurationLensStorageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfig: string
}
class ConfigurationLensStorageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'storagelensconfiguration',
  `arn:${string}:s3:${string}:${string}:storage-lens/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'storagelensconfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfig: string
  constructor(parameters: ConfigurationLensStorageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfig = parameters.idConfig
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:storage-lens/${this.idConfig}` as const
  }
}
export type { ConfigurationLensStorageArn }
export function configurationLensStorageArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationLensStorageArnParameters<Partition>) {
  return new ConfigurationLensStorageArn<Partition>(parameters)
}

export interface GroupLensStorageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class GroupLensStorageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'storagelensgroup',
  `arn:${string}:s3:${string}:${string}:storage-lens-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'storagelensgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: GroupLensStorageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:storage-lens-group/${this.name}` as const
  }
}
export type { GroupLensStorageArn }
export function groupLensStorageArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupLensStorageArnParameters<Partition>,
) {
  return new GroupLensStorageArn<Partition>(parameters)
}

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

export interface PointAccessRegionMultiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly aliasPointAccess: string
}
class PointAccessRegionMultiArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'multiregionaccesspoint',
  `arn:${string}:s3::${string}:accesspoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'multiregionaccesspoint' as const
  readonly partition: string
  readonly account: string
  readonly aliasPointAccess: string
  constructor(parameters: PointAccessRegionMultiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.aliasPointAccess = parameters.aliasPointAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3::${this.account}:accesspoint/${this.aliasPointAccess}` as const
  }
}
export type { PointAccessRegionMultiArn }
export function pointAccessRegionMultiArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PointAccessRegionMultiArnParameters<Partition>) {
  return new PointAccessRegionMultiArn<Partition>(parameters)
}

export interface ArnRequestPointAccessRegionMultiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly operation: string
  readonly token: string
}
class ArnRequestPointAccessRegionMultiArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'multiregionaccesspointrequestarn',
  `arn:${string}:s3:us-west-2:${string}:async-request/mrap/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'multiregionaccesspointrequestarn' as const
  readonly partition: string
  readonly account: string
  readonly operation: string
  readonly token: string
  constructor(
    parameters: ArnRequestPointAccessRegionMultiArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.operation = parameters.operation
    this.token = parameters.token
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:us-west-2:${this.account}:async-request/mrap/${this.operation}/${this.token}` as const
  }
}
export type { ArnRequestPointAccessRegionMultiArn }
export function arnRequestPointAccessRegionMultiArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ArnRequestPointAccessRegionMultiArnParameters<Partition>) {
  return new ArnRequestPointAccessRegionMultiArn<Partition>(parameters)
}

export interface InstanceGrantsAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class InstanceGrantsAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accessgrantsinstance',
  `arn:${string}:s3:${string}:${string}:access-grants/default`
> {
  readonly [ArnResourceTypeBrand] = 'accessgrantsinstance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: InstanceGrantsAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:access-grants/default` as const
  }
}
export type { InstanceGrantsAccessArn }
export function instanceGrantsAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceGrantsAccessArnParameters<Partition>,
) {
  return new InstanceGrantsAccessArn<Partition>(parameters)
}

export interface LocationGrantsAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly token: string
}
class LocationGrantsAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accessgrantslocation',
  `arn:${string}:s3:${string}:${string}:access-grants/default/location/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accessgrantslocation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly token: string
  constructor(parameters: LocationGrantsAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.token = parameters.token
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:access-grants/default/location/${this.token}` as const
  }
}
export type { LocationGrantsAccessArn }
export function locationGrantsAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: LocationGrantsAccessArnParameters<Partition>,
) {
  return new LocationGrantsAccessArn<Partition>(parameters)
}

export interface GrantAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly token: string
}
class GrantAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accessgrant',
  `arn:${string}:s3:${string}:${string}:access-grants/default/grant/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accessgrant' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly token: string
  constructor(parameters: GrantAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.token = parameters.token
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:${this.region}:${this.account}:access-grants/default/grant/${this.token}` as const
  }
}
export type { GrantAccessArn }
export function grantAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: GrantAccessArnParameters<Partition>,
) {
  return new GrantAccessArn<Partition>(parameters)
}
