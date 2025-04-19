import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CollectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly collectionId: string
}
class CollectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'collection',
  `arn:${string}:rekognition:${string}:${string}:collection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'collection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly collectionId: string
  constructor(parameters: CollectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.collectionId = parameters.collectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:collection/${this.collectionId}` as const
  }
}
export type { CollectionArn }
export function collectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollectionArnParameters<Partition>,
) {
  return new CollectionArn<Partition>(parameters)
}

export interface StreamprocessorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamprocessorId: string
}
class StreamprocessorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streamprocessor',
  `arn:${string}:rekognition:${string}:${string}:streamprocessor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streamprocessor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamprocessorId: string
  constructor(parameters: StreamprocessorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamprocessorId = parameters.streamprocessorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:streamprocessor/${this.streamprocessorId}` as const
  }
}
export type { StreamprocessorArn }
export function streamprocessorArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamprocessorArnParameters<Partition>,
) {
  return new StreamprocessorArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly creationTimestamp: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:rekognition:${string}:${string}:project/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly creationTimestamp: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.creationTimestamp = parameters.creationTimestamp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.projectName}/${this.creationTimestamp}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface ProjectversionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly versionName: string
  readonly creationTimestamp: string
}
class ProjectversionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'projectversion',
  `arn:${string}:rekognition:${string}:${string}:project/${string}/version/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'projectversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly versionName: string
  readonly creationTimestamp: string
  constructor(parameters: ProjectversionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.versionName = parameters.versionName
    this.creationTimestamp = parameters.creationTimestamp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.projectName}/version/${this.versionName}/${this.creationTimestamp}` as const
  }
}
export type { ProjectversionArn }
export function projectversionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectversionArnParameters<Partition>,
) {
  return new ProjectversionArn<Partition>(parameters)
}

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly datasetType: string
  readonly creationTimestamp: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:rekognition:${string}:${string}:project/${string}/dataset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly datasetType: string
  readonly creationTimestamp: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.datasetType = parameters.datasetType
    this.creationTimestamp = parameters.creationTimestamp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.projectName}/dataset/${this.datasetType}/${this.creationTimestamp}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasetArnParameters<Partition>,
) {
  return new DatasetArn<Partition>(parameters)
}
