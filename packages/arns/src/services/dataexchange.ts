import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'jobs',
  `arn:${string}:dataexchange:${string}:${string}:jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobs' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:jobs/${this.idJob}` as const
  }
}
export type { JobsArn }
export function jobsArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobsArnParameters<Partition>,
) {
  return new JobsArn<Partition>(parameters)
}

export interface SetsDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
}
class SetsDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'data-sets',
  `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-sets' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  constructor(parameters: SetsDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetData = parameters.idSetData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:data-sets/${this.idSetData}` as const
  }
}
export type { SetsDataArn }
export function setsDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetsDataArnParameters<Partition>,
) {
  return new SetsDataArn<Partition>(parameters)
}

export interface SetsDataEntitledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idSetData: string
}
class SetsDataEntitledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entitled-data-sets',
  `arn:${string}:dataexchange:${string}::data-sets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entitled-data-sets' as const
  readonly partition: string
  readonly region: string
  readonly idSetData: string
  constructor(parameters: SetsDataEntitledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idSetData = parameters.idSetData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}::data-sets/${this.idSetData}` as const
  }
}
export type { SetsDataEntitledArn }
export function setsDataEntitledArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetsDataEntitledArnParameters<Partition>,
) {
  return new SetsDataEntitledArn<Partition>(parameters)
}

export interface RevisionsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idRevision: string
}
class RevisionsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'revisions',
  `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}/revisions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'revisions' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idRevision: string
  constructor(parameters: RevisionsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetData = parameters.idSetData
    this.idRevision = parameters.idRevision
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:data-sets/${this.idSetData}/revisions/${this.idRevision}` as const
  }
}
export type { RevisionsArn }
export function revisionsArn<Partition extends ArnPartition = 'aws'>(
  parameters: RevisionsArnParameters<Partition>,
) {
  return new RevisionsArn<Partition>(parameters)
}

export interface RevisionsEntitledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idSetData: string
  readonly idRevision: string
}
class RevisionsEntitledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entitled-revisions',
  `arn:${string}:dataexchange:${string}::data-sets/${string}/revisions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entitled-revisions' as const
  readonly partition: string
  readonly region: string
  readonly idSetData: string
  readonly idRevision: string
  constructor(parameters: RevisionsEntitledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idSetData = parameters.idSetData
    this.idRevision = parameters.idRevision
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}::data-sets/${this.idSetData}/revisions/${this.idRevision}` as const
  }
}
export type { RevisionsEntitledArn }
export function revisionsEntitledArn<Partition extends ArnPartition = 'aws'>(
  parameters: RevisionsEntitledArnParameters<Partition>,
) {
  return new RevisionsEntitledArn<Partition>(parameters)
}

export interface AssetsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idRevision: string
  readonly idAsset: string
}
class AssetsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'assets',
  `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}/revisions/${string}/assets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assets' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetData: string
  readonly idRevision: string
  readonly idAsset: string
  constructor(parameters: AssetsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetData = parameters.idSetData
    this.idRevision = parameters.idRevision
    this.idAsset = parameters.idAsset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:data-sets/${this.idSetData}/revisions/${this.idRevision}/assets/${this.idAsset}` as const
  }
}
export type { AssetsArn }
export function assetsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssetsArnParameters<Partition>,
) {
  return new AssetsArn<Partition>(parameters)
}

export interface AssetsEntitledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idSetData: string
  readonly idRevision: string
  readonly idAsset: string
}
class AssetsEntitledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entitled-assets',
  `arn:${string}:dataexchange:${string}::data-sets/${string}/revisions/${string}/assets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entitled-assets' as const
  readonly partition: string
  readonly region: string
  readonly idSetData: string
  readonly idRevision: string
  readonly idAsset: string
  constructor(parameters: AssetsEntitledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idSetData = parameters.idSetData
    this.idRevision = parameters.idRevision
    this.idAsset = parameters.idAsset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}::data-sets/${this.idSetData}/revisions/${this.idRevision}/assets/${this.idAsset}` as const
  }
}
export type { AssetsEntitledArn }
export function assetsEntitledArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssetsEntitledArnParameters<Partition>,
) {
  return new AssetsEntitledArn<Partition>(parameters)
}

export interface ActionsEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idActionEvent: string
}
class ActionsEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-actions',
  `arn:${string}:dataexchange:${string}:${string}:event-actions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-actions' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idActionEvent: string
  constructor(parameters: ActionsEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idActionEvent = parameters.idActionEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dataexchange:${this.region}:${this.account}:event-actions/${this.idActionEvent}` as const
  }
}
export type { ActionsEventArn }
export function actionsEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionsEventArnParameters<Partition>,
) {
  return new ActionsEventArn<Partition>(parameters)
}
