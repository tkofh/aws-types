import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Project',
  `arn:${string}:evidently:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.nameProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface FeatureArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameFeature: string
}
class FeatureArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Feature',
  `arn:${string}:evidently:${string}:${string}:project/${string}/feature/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Feature' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameFeature: string
  constructor(parameters: FeatureArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
    this.nameFeature = parameters.nameFeature
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.nameProject}/feature/${this.nameFeature}` as const
  }
}
export type { FeatureArn }
export function featureArn<Partition extends ArnPartition = 'aws'>(
  parameters: FeatureArnParameters<Partition>,
) {
  return new FeatureArn<Partition>(parameters)
}

export interface ExperimentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameExperiment: string
}
class ExperimentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Experiment',
  `arn:${string}:evidently:${string}:${string}:project/${string}/experiment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Experiment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameExperiment: string
  constructor(parameters: ExperimentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
    this.nameExperiment = parameters.nameExperiment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.nameProject}/experiment/${this.nameExperiment}` as const
  }
}
export type { ExperimentArn }
export function experimentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExperimentArnParameters<Partition>,
) {
  return new ExperimentArn<Partition>(parameters)
}

export interface LaunchArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameLaunch: string
}
class LaunchArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Launch',
  `arn:${string}:evidently:${string}:${string}:project/${string}/launch/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Launch' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly nameLaunch: string
  constructor(parameters: LaunchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
    this.nameLaunch = parameters.nameLaunch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.nameProject}/launch/${this.nameLaunch}` as const
  }
}
export type { LaunchArn }
export function launchArn<Partition extends ArnPartition = 'aws'>(
  parameters: LaunchArnParameters<Partition>,
) {
  return new LaunchArn<Partition>(parameters)
}

export interface SegmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSegment: string
}
class SegmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Segment',
  `arn:${string}:evidently:${string}:${string}:segment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Segment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSegment: string
  constructor(parameters: SegmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSegment = parameters.nameSegment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:segment/${this.nameSegment}` as const
  }
}
export type { SegmentArn }
export function segmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: SegmentArnParameters<Partition>,
) {
  return new SegmentArn<Partition>(parameters)
}
