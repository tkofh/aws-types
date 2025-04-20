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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollection: string
}
class CollectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'collection',
  `arn:${string}:rekognition:${string}:${string}:collection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'collection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollection: string
  constructor(parameters: CollectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCollection = parameters.idCollection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:collection/${this.idCollection}` as const
  }
}
export type { CollectionArn }
export function collectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollectionArnParameters<Partition>,
) {
  return new CollectionArn<Partition>(parameters)
}

export interface ProcessorStreamArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProcessorStream: string
}
class ProcessorStreamArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streamprocessor',
  `arn:${string}:rekognition:${string}:${string}:streamprocessor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streamprocessor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProcessorStream: string
  constructor(parameters: ProcessorStreamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProcessorStream = parameters.idProcessorStream
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:streamprocessor/${this.idProcessorStream}` as const
  }
}
export type { ProcessorStreamArn }
export function processorStreamArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProcessorStreamArnParameters<Partition>,
) {
  return new ProcessorStreamArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly stampTimeCreation: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:rekognition:${string}:${string}:project/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly stampTimeCreation: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
    this.stampTimeCreation = parameters.stampTimeCreation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.nameProject}/${this.stampTimeCreation}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface VersionProjectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameVersion: string
  readonly stampTimeCreation: string
}
class VersionProjectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'projectversion',
  `arn:${string}:rekognition:${string}:${string}:project/${string}/version/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'projectversion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameVersion: string
  readonly stampTimeCreation: string
  constructor(parameters: VersionProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
    this.nameVersion = parameters.nameVersion
    this.stampTimeCreation = parameters.stampTimeCreation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.nameProject}/version/${this.nameVersion}/${this.stampTimeCreation}` as const
  }
}
export type { VersionProjectArn }
export function versionProjectArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionProjectArnParameters<Partition>,
) {
  return new VersionProjectArn<Partition>(parameters)
}

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly typeSetData: string
  readonly stampTimeCreation: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:rekognition:${string}:${string}:project/${string}/dataset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly typeSetData: string
  readonly stampTimeCreation: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
    this.typeSetData = parameters.typeSetData
    this.stampTimeCreation = parameters.stampTimeCreation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rekognition:${this.region}:${this.account}:project/${this.nameProject}/dataset/${this.typeSetData}/${this.stampTimeCreation}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}
