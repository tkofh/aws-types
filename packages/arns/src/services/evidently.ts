import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Project', `arn:${string}:evidently:${string}:${string}:project/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.projectName}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(parameters: ProjectArnParameters<Partition>) {
  return new ProjectArn<Partition>(parameters)
}

export interface FeatureArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly featureName: string
}
class FeatureArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Feature', `arn:${string}:evidently:${string}:${string}:project/${string}/feature/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Feature' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly featureName: string
  constructor(parameters: FeatureArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.featureName = parameters.featureName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.projectName}/feature/${this.featureName}` as const
  }
}
export type { FeatureArn }
export function featureArn<Partition extends ArnPartition = 'aws'>(parameters: FeatureArnParameters<Partition>) {
  return new FeatureArn<Partition>(parameters)
}

export interface ExperimentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly experimentName: string
}
class ExperimentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Experiment', `arn:${string}:evidently:${string}:${string}:project/${string}/experiment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Experiment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly experimentName: string
  constructor(parameters: ExperimentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.experimentName = parameters.experimentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.projectName}/experiment/${this.experimentName}` as const
  }
}
export type { ExperimentArn }
export function experimentArn<Partition extends ArnPartition = 'aws'>(parameters: ExperimentArnParameters<Partition>) {
  return new ExperimentArn<Partition>(parameters)
}

export interface LaunchArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly launchName: string
}
class LaunchArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Launch', `arn:${string}:evidently:${string}:${string}:project/${string}/launch/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Launch' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly launchName: string
  constructor(parameters: LaunchArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.launchName = parameters.launchName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:project/${this.projectName}/launch/${this.launchName}` as const
  }
}
export type { LaunchArn }
export function launchArn<Partition extends ArnPartition = 'aws'>(parameters: LaunchArnParameters<Partition>) {
  return new LaunchArn<Partition>(parameters)
}

export interface SegmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly segmentName: string
}
class SegmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Segment', `arn:${string}:evidently:${string}:${string}:segment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Segment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly segmentName: string
  constructor(parameters: SegmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.segmentName = parameters.segmentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:evidently:${this.region}:${this.account}:segment/${this.segmentName}` as const
  }
}
export type { SegmentArn }
export function segmentArn<Partition extends ArnPartition = 'aws'>(parameters: SegmentArnParameters<Partition>) {
  return new SegmentArn<Partition>(parameters)
}