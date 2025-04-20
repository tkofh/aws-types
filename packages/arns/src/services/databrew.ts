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
  readonly idResource: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Project',
  `arn:${string}:databrew:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:project/${this.idResource}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Dataset',
  `arn:${string}:databrew:${string}:${string}:dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:dataset/${this.idResource}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

export interface SetRuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SetRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Ruleset',
  `arn:${string}:databrew:${string}:${string}:ruleset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Ruleset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SetRuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:ruleset/${this.idResource}` as const
  }
}
export type { SetRuleArn }
export function setRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetRuleArnParameters<Partition>,
) {
  return new SetRuleArn<Partition>(parameters)
}

export interface RecipeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class RecipeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Recipe',
  `arn:${string}:databrew:${string}:${string}:recipe/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Recipe' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: RecipeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:recipe/${this.idResource}` as const
  }
}
export type { RecipeArn }
export function recipeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecipeArnParameters<Partition>,
) {
  return new RecipeArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Job',
  `arn:${string}:databrew:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:job/${this.idResource}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface ScheduleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ScheduleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Schedule',
  `arn:${string}:databrew:${string}:${string}:schedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Schedule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ScheduleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:databrew:${this.region}:${this.account}:schedule/${this.idResource}` as const
  }
}
export type { ScheduleArn }
export function scheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduleArnParameters<Partition>,
) {
  return new ScheduleArn<Partition>(parameters)
}
