import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface SyncProfileResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly syncProfileName: string
}
class SyncProfileResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'SyncProfileResource', `arn:${string}:identity-sync:${string}:${string}:profile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'SyncProfileResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly syncProfileName: string
  constructor(parameters: SyncProfileResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.syncProfileName = parameters.syncProfileName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identity-sync:${this.region}:${this.account}:profile/${this.syncProfileName}` as const
  }
}
export type { SyncProfileResourceArn }
export function syncProfileResourceArn<Partition extends ArnPartition = 'aws'>(parameters: SyncProfileResourceArnParameters<Partition>) {
  return new SyncProfileResourceArn<Partition>(parameters)
}

export interface SyncTargetResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly syncProfileName: string
  readonly syncTargetName: string
}
class SyncTargetResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'SyncTargetResource', `arn:${string}:identity-sync:${string}:${string}:target/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'SyncTargetResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly syncProfileName: string
  readonly syncTargetName: string
  constructor(parameters: SyncTargetResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.syncProfileName = parameters.syncProfileName
    this.syncTargetName = parameters.syncTargetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identity-sync:${this.region}:${this.account}:target/${this.syncProfileName}/${this.syncTargetName}` as const
  }
}
export type { SyncTargetResourceArn }
export function syncTargetResourceArn<Partition extends ArnPartition = 'aws'>(parameters: SyncTargetResourceArnParameters<Partition>) {
  return new SyncTargetResourceArn<Partition>(parameters)
}