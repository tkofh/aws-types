import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface BuildArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly buildId: string
}
class BuildArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'build', `arn:${string}:codebuild:${string}:${string}:build/${string}`> {
  readonly [ArnResourceTypeBrand] = 'build' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly buildId: string
  constructor(parameters: BuildArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.buildId = parameters.buildId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:build/${this.buildId}` as const
  }
}
export type { BuildArn }
export function buildArn<Partition extends ArnPartition = 'aws'>(parameters: BuildArnParameters<Partition>) {
  return new BuildArn<Partition>(parameters)
}

export interface BuildBatchArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly buildBatchId: string
}
class BuildBatchArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'build-batch', `arn:${string}:codebuild:${string}:${string}:build-batch/${string}`> {
  readonly [ArnResourceTypeBrand] = 'build-batch' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly buildBatchId: string
  constructor(parameters: BuildBatchArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.buildBatchId = parameters.buildBatchId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:build-batch/${this.buildBatchId}` as const
  }
}
export type { BuildBatchArn }
export function buildBatchArn<Partition extends ArnPartition = 'aws'>(parameters: BuildBatchArnParameters<Partition>) {
  return new BuildBatchArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'project', `arn:${string}:codebuild:${string}:${string}:project/${string}`> {
  readonly [ArnResourceTypeBrand] = 'project' as const
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
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:project/${this.projectName}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(parameters: ProjectArnParameters<Partition>) {
  return new ProjectArn<Partition>(parameters)
}

export interface ReportGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportGroupName: string
}
class ReportGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'report-group', `arn:${string}:codebuild:${string}:${string}:report-group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'report-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportGroupName: string
  constructor(parameters: ReportGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reportGroupName = parameters.reportGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:report-group/${this.reportGroupName}` as const
  }
}
export type { ReportGroupArn }
export function reportGroupArn<Partition extends ArnPartition = 'aws'>(parameters: ReportGroupArnParameters<Partition>) {
  return new ReportGroupArn<Partition>(parameters)
}

export interface ReportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportGroupName: string
  readonly reportId: string
}
class ReportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'report', `arn:${string}:codebuild:${string}:${string}:report/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'report' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportGroupName: string
  readonly reportId: string
  constructor(parameters: ReportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reportGroupName = parameters.reportGroupName
    this.reportId = parameters.reportId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:report/${this.reportGroupName}:${this.reportId}` as const
  }
}
export type { ReportArn }
export function reportArn<Partition extends ArnPartition = 'aws'>(parameters: ReportArnParameters<Partition>) {
  return new ReportArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetName: string
  readonly fleetId: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'fleet', `arn:${string}:codebuild:${string}:${string}:fleet/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetName: string
  readonly fleetId: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fleetName = parameters.fleetName
    this.fleetId = parameters.fleetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codebuild:${this.region}:${this.account}:fleet/${this.fleetName}:${this.fleetId}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(parameters: FleetArnParameters<Partition>) {
  return new FleetArn<Partition>(parameters)
}