export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
}
export type ProjectArn = `arn:${string}:evidently:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:evidently:${parameters.region}:${parameters.account}:project/${parameters.projectName}`
}

export interface FeatureArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
  featureName: string
}
export type FeatureArn = `arn:${string}:evidently:${string}:${string}:project/${string}/feature/${string}`
export function featureArn(parameters: FeatureArnParameters): FeatureArn {
  return `arn:${parameters.partition ?? ''}:evidently:${parameters.region}:${parameters.account}:project/${parameters.projectName}/feature/${parameters.featureName}`
}

export interface ExperimentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
  experimentName: string
}
export type ExperimentArn = `arn:${string}:evidently:${string}:${string}:project/${string}/experiment/${string}`
export function experimentArn(parameters: ExperimentArnParameters): ExperimentArn {
  return `arn:${parameters.partition ?? ''}:evidently:${parameters.region}:${parameters.account}:project/${parameters.projectName}/experiment/${parameters.experimentName}`
}

export interface LaunchArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
  launchName: string
}
export type LaunchArn = `arn:${string}:evidently:${string}:${string}:project/${string}/launch/${string}`
export function launchArn(parameters: LaunchArnParameters): LaunchArn {
  return `arn:${parameters.partition ?? ''}:evidently:${parameters.region}:${parameters.account}:project/${parameters.projectName}/launch/${parameters.launchName}`
}

export interface SegmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  segmentName: string
}
export type SegmentArn = `arn:${string}:evidently:${string}:${string}:segment/${string}`
export function segmentArn(parameters: SegmentArnParameters): SegmentArn {
  return `arn:${parameters.partition ?? ''}:evidently:${parameters.region}:${parameters.account}:segment/${parameters.segmentName}`
}