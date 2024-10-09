export interface BuildArnParameters {
  partition?: string | undefined
  region: string
  account: string
  buildId: string
}
export type BuildArn = `arn:${string}:codebuild:${string}:${string}:build/${string}`
export function buildArn(parameters: BuildArnParameters): BuildArn {
  return `arn:${parameters.partition ?? ''}:codebuild:${parameters.region}:${parameters.account}:build/${parameters.buildId}`
}

export interface BuildBatchArnParameters {
  partition?: string | undefined
  region: string
  account: string
  buildBatchId: string
}
export type BuildBatchArn = `arn:${string}:codebuild:${string}:${string}:build-batch/${string}`
export function buildBatchArn(parameters: BuildBatchArnParameters): BuildBatchArn {
  return `arn:${parameters.partition ?? ''}:codebuild:${parameters.region}:${parameters.account}:build-batch/${parameters.buildBatchId}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
}
export type ProjectArn = `arn:${string}:codebuild:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:codebuild:${parameters.region}:${parameters.account}:project/${parameters.projectName}`
}

export interface ReportGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reportGroupName: string
}
export type ReportGroupArn = `arn:${string}:codebuild:${string}:${string}:report-group/${string}`
export function reportGroupArn(parameters: ReportGroupArnParameters): ReportGroupArn {
  return `arn:${parameters.partition ?? ''}:codebuild:${parameters.region}:${parameters.account}:report-group/${parameters.reportGroupName}`
}

export interface ReportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reportGroupName: string
  reportId: string
}
export type ReportArn = `arn:${string}:codebuild:${string}:${string}:report/${string}:${string}`
export function reportArn(parameters: ReportArnParameters): ReportArn {
  return `arn:${parameters.partition ?? ''}:codebuild:${parameters.region}:${parameters.account}:report/${parameters.reportGroupName}:${parameters.reportId}`
}

export interface FleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fleetName: string
  fleetId: string
}
export type FleetArn = `arn:${string}:codebuild:${string}:${string}:fleet/${string}:${string}`
export function fleetArn(parameters: FleetArnParameters): FleetArn {
  return `arn:${parameters.partition ?? ''}:codebuild:${parameters.region}:${parameters.account}:fleet/${parameters.fleetName}:${parameters.fleetId}`
}