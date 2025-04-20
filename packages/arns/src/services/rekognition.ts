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

export interface StreamProcessorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamProcessorId: string
}
class StreamProcessorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streamprocessor',
  `arn:${string}:rekognition:${string}:${string}:streamprocessor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streamprocessor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamProcessorId: string
  constructor(parameters: StreamProcessorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamProcessorId = parameters.streamProcessorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:streamprocessor/${this.streamProcessorId}` as const
  }
}
export type { StreamProcessorArn }
export function streamProcessorArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamProcessorArnParameters<Partition>,
) {
  return new StreamProcessorArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly creationTimeStamp: string
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
  readonly creationTimeStamp: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.creationTimeStamp = parameters.creationTimeStamp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.projectName}/${this.creationTimeStamp}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface ProjectVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly versionName: string
  readonly creationTimeStamp: string
}
class ProjectVersionArn<
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
  readonly creationTimeStamp: string
  constructor(parameters: ProjectVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.versionName = parameters.versionName
    this.creationTimeStamp = parameters.creationTimeStamp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.projectName}/version/${this.versionName}/${this.creationTimeStamp}` as const
  }
}
export type { ProjectVersionArn }
export function projectVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectVersionArnParameters<Partition>,
) {
  return new ProjectVersionArn<Partition>(parameters)
}

export interface DataSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly dataSetType: string
  readonly creationTimeStamp: string
}
class DataSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:rekognition:${string}:${string}:project/${string}/dataset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly dataSetType: string
  readonly creationTimeStamp: string
  constructor(parameters: DataSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.dataSetType = parameters.dataSetType
    this.creationTimeStamp = parameters.creationTimeStamp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.projectName}/dataset/${this.dataSetType}/${this.creationTimeStamp}` as const
  }
}
export type { DataSetArn }
export function dataSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataSetArnParameters<Partition>,
) {
  return new DataSetArn<Partition>(parameters)
}
