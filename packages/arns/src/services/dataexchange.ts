import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface JobsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'jobs', `arn:${string}:dataexchange:${string}:${string}:jobs/${string}`> {
  readonly [ArnResourceTypeBrand] = 'jobs' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: JobsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:jobs/${this.jobId}` as const
  }
}
export type { JobsArn }
export function jobsArn<Partition extends ArnPartition = 'aws'>(parameters: JobsArnParameters<Partition>) {
  return new JobsArn<Partition>(parameters)
}

export interface DataSetsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataSetId: string
}
class DataSetsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'data-sets', `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}`> {
  readonly [ArnResourceTypeBrand] = 'data-sets' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataSetId: string
  constructor(parameters: DataSetsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataSetId = parameters.dataSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:data-sets/${this.dataSetId}` as const
  }
}
export type { DataSetsArn }
export function dataSetsArn<Partition extends ArnPartition = 'aws'>(parameters: DataSetsArnParameters<Partition>) {
  return new DataSetsArn<Partition>(parameters)
}

export interface EntitledDataSetsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly dataSetId: string
}
class EntitledDataSetsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'entitled-data-sets', `arn:${string}:dataexchange:${string}::data-sets/${string}`> {
  readonly [ArnResourceTypeBrand] = 'entitled-data-sets' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly dataSetId: string
  constructor(parameters: EntitledDataSetsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.dataSetId = parameters.dataSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}::data-sets/${this.dataSetId}` as const
  }
}
export type { EntitledDataSetsArn }
export function entitledDataSetsArn<Partition extends ArnPartition = 'aws'>(parameters: EntitledDataSetsArnParameters<Partition>) {
  return new EntitledDataSetsArn<Partition>(parameters)
}

export interface RevisionsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataSetId: string
  readonly revisionId: string
}
class RevisionsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'revisions', `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}/revisions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'revisions' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataSetId: string
  readonly revisionId: string
  constructor(parameters: RevisionsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataSetId = parameters.dataSetId
    this.revisionId = parameters.revisionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:data-sets/${this.dataSetId}/revisions/${this.revisionId}` as const
  }
}
export type { RevisionsArn }
export function revisionsArn<Partition extends ArnPartition = 'aws'>(parameters: RevisionsArnParameters<Partition>) {
  return new RevisionsArn<Partition>(parameters)
}

export interface EntitledRevisionsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly dataSetId: string
  readonly revisionId: string
}
class EntitledRevisionsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'entitled-revisions', `arn:${string}:dataexchange:${string}::data-sets/${string}/revisions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'entitled-revisions' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly dataSetId: string
  readonly revisionId: string
  constructor(parameters: EntitledRevisionsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.dataSetId = parameters.dataSetId
    this.revisionId = parameters.revisionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}::data-sets/${this.dataSetId}/revisions/${this.revisionId}` as const
  }
}
export type { EntitledRevisionsArn }
export function entitledRevisionsArn<Partition extends ArnPartition = 'aws'>(parameters: EntitledRevisionsArnParameters<Partition>) {
  return new EntitledRevisionsArn<Partition>(parameters)
}

export interface AssetsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataSetId: string
  readonly revisionId: string
  readonly assetId: string
}
class AssetsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'assets', `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}/revisions/${string}/assets/${string}`> {
  readonly [ArnResourceTypeBrand] = 'assets' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataSetId: string
  readonly revisionId: string
  readonly assetId: string
  constructor(parameters: AssetsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataSetId = parameters.dataSetId
    this.revisionId = parameters.revisionId
    this.assetId = parameters.assetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:data-sets/${this.dataSetId}/revisions/${this.revisionId}/assets/${this.assetId}` as const
  }
}
export type { AssetsArn }
export function assetsArn<Partition extends ArnPartition = 'aws'>(parameters: AssetsArnParameters<Partition>) {
  return new AssetsArn<Partition>(parameters)
}

export interface EntitledAssetsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly dataSetId: string
  readonly revisionId: string
  readonly assetId: string
}
class EntitledAssetsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'entitled-assets', `arn:${string}:dataexchange:${string}::data-sets/${string}/revisions/${string}/assets/${string}`> {
  readonly [ArnResourceTypeBrand] = 'entitled-assets' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly dataSetId: string
  readonly revisionId: string
  readonly assetId: string
  constructor(parameters: EntitledAssetsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.dataSetId = parameters.dataSetId
    this.revisionId = parameters.revisionId
    this.assetId = parameters.assetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}::data-sets/${this.dataSetId}/revisions/${this.revisionId}/assets/${this.assetId}` as const
  }
}
export type { EntitledAssetsArn }
export function entitledAssetsArn<Partition extends ArnPartition = 'aws'>(parameters: EntitledAssetsArnParameters<Partition>) {
  return new EntitledAssetsArn<Partition>(parameters)
}

export interface EventActionsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventActionId: string
}
class EventActionsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'event-actions', `arn:${string}:dataexchange:${string}:${string}:event-actions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'event-actions' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventActionId: string
  constructor(parameters: EventActionsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventActionId = parameters.eventActionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:event-actions/${this.eventActionId}` as const
  }
}
export type { EventActionsArn }
export function eventActionsArn<Partition extends ArnPartition = 'aws'>(parameters: EventActionsArnParameters<Partition>) {
  return new EventActionsArn<Partition>(parameters)
}