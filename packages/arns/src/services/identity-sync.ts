import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResourceProfileSyncArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfileSync: string
}
class ResourceProfileSyncArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SyncProfileResource',
  `arn:${string}:identity-sync:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SyncProfileResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfileSync: string
  constructor(parameters: ResourceProfileSyncArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProfileSync = parameters.nameProfileSync
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identity-sync:${this.region}:${this.account}:profile/${this.nameProfileSync}` as const
  }
}
export type { ResourceProfileSyncArn }
export function resourceProfileSyncArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceProfileSyncArnParameters<Partition>,
) {
  return new ResourceProfileSyncArn<Partition>(parameters)
}

export interface ResourceTargetSyncArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfileSync: string
  readonly nameTargetSync: string
}
class ResourceTargetSyncArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SyncTargetResource',
  `arn:${string}:identity-sync:${string}:${string}:target/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SyncTargetResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfileSync: string
  readonly nameTargetSync: string
  constructor(parameters: ResourceTargetSyncArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProfileSync = parameters.nameProfileSync
    this.nameTargetSync = parameters.nameTargetSync
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identity-sync:${this.region}:${this.account}:target/${this.nameProfileSync}/${this.nameTargetSync}` as const
  }
}
export type { ResourceTargetSyncArn }
export function resourceTargetSyncArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceTargetSyncArnParameters<Partition>,
) {
  return new ResourceTargetSyncArn<Partition>(parameters)
}
