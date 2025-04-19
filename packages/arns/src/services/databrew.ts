import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Project', `arn:${string}:databrew:${string}:${string}:project/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:project/${this.resourceId}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(parameters: ProjectArnParameters<Partition>) {
  return new ProjectArn<Partition>(parameters)
}

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Dataset', `arn:${string}:databrew:${string}:${string}:dataset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:dataset/${this.resourceId}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetArnParameters<Partition>) {
  return new DatasetArn<Partition>(parameters)
}

export interface RulesetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RulesetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Ruleset', `arn:${string}:databrew:${string}:${string}:ruleset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Ruleset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RulesetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:ruleset/${this.resourceId}` as const
  }
}
export type { RulesetArn }
export function rulesetArn<Partition extends ArnPartition = 'aws'>(parameters: RulesetArnParameters<Partition>) {
  return new RulesetArn<Partition>(parameters)
}

export interface RecipeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RecipeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Recipe', `arn:${string}:databrew:${string}:${string}:recipe/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Recipe' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RecipeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:recipe/${this.resourceId}` as const
  }
}
export type { RecipeArn }
export function recipeArn<Partition extends ArnPartition = 'aws'>(parameters: RecipeArnParameters<Partition>) {
  return new RecipeArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Job', `arn:${string}:databrew:${string}:${string}:job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:job/${this.resourceId}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(parameters: JobArnParameters<Partition>) {
  return new JobArn<Partition>(parameters)
}

export interface ScheduleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ScheduleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Schedule', `arn:${string}:databrew:${string}:${string}:schedule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Schedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ScheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:schedule/${this.resourceId}` as const
  }
}
export type { ScheduleArn }
export function scheduleArn<Partition extends ArnPartition = 'aws'>(parameters: ScheduleArnParameters<Partition>) {
  return new ScheduleArn<Partition>(parameters)
}