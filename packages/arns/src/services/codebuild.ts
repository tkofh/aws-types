import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BuildArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBuild: string
}
class BuildArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'build',
  `arn:${string}:codebuild:${string}:${string}:build/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'build' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBuild: string
  constructor(parameters: BuildArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBuild = parameters.idBuild
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:build/${this.idBuild}` as const
  }
}
export type { BuildArn }
export function buildArn<Partition extends ArnPartition = 'aws'>(
  parameters: BuildArnParameters<Partition>,
) {
  return new BuildArn<Partition>(parameters)
}

export interface BatchBuildArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBatchBuild: string
}
class BatchBuildArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'build-batch',
  `arn:${string}:codebuild:${string}:${string}:build-batch/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'build-batch' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBatchBuild: string
  constructor(parameters: BatchBuildArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBatchBuild = parameters.idBatchBuild
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:build-batch/${this.idBatchBuild}` as const
  }
}
export type { BatchBuildArn }
export function batchBuildArn<Partition extends ArnPartition = 'aws'>(
  parameters: BatchBuildArnParameters<Partition>,
) {
  return new BatchBuildArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:codebuild:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
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
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:project/${this.nameProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface GroupReportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupReport: string
}
class GroupReportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'report-group',
  `arn:${string}:codebuild:${string}:${string}:report-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'report-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupReport: string
  constructor(parameters: GroupReportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupReport = parameters.nameGroupReport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:report-group/${this.nameGroupReport}` as const
  }
}
export type { GroupReportArn }
export function groupReportArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupReportArnParameters<Partition>,
) {
  return new GroupReportArn<Partition>(parameters)
}

export interface ReportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupReport: string
  readonly idReport: string
}
class ReportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'report',
  `arn:${string}:codebuild:${string}:${string}:report/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'report' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupReport: string
  readonly idReport: string
  constructor(parameters: ReportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupReport = parameters.nameGroupReport
    this.idReport = parameters.idReport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:report/${this.nameGroupReport}:${this.idReport}` as const
  }
}
export type { ReportArn }
export function reportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReportArnParameters<Partition>,
) {
  return new ReportArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleet: string
  readonly idFleet: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:codebuild:${string}:${string}:fleet/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleet: string
  readonly idFleet: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFleet = parameters.nameFleet
    this.idFleet = parameters.idFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:fleet/${this.nameFleet}:${this.idFleet}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}
