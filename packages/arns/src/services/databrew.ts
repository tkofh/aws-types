export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProjectArn = `arn:${string}:databrew:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:databrew:${parameters.region}:${parameters.account}:project/${parameters.resourceId}`
}

export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetArn = `arn:${string}:databrew:${string}:${string}:dataset/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:databrew:${parameters.region}:${parameters.account}:dataset/${parameters.resourceId}`
}

export interface RulesetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RulesetArn = `arn:${string}:databrew:${string}:${string}:ruleset/${string}`
export function rulesetArn(parameters: RulesetArnParameters): RulesetArn {
  return `arn:${parameters.partition ?? ''}:databrew:${parameters.region}:${parameters.account}:ruleset/${parameters.resourceId}`
}

export interface RecipeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RecipeArn = `arn:${string}:databrew:${string}:${string}:recipe/${string}`
export function recipeArn(parameters: RecipeArnParameters): RecipeArn {
  return `arn:${parameters.partition ?? ''}:databrew:${parameters.region}:${parameters.account}:recipe/${parameters.resourceId}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type JobArn = `arn:${string}:databrew:${string}:${string}:job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:databrew:${parameters.region}:${parameters.account}:job/${parameters.resourceId}`
}

export interface ScheduleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ScheduleArn = `arn:${string}:databrew:${string}:${string}:schedule/${string}`
export function scheduleArn(parameters: ScheduleArnParameters): ScheduleArn {
  return `arn:${parameters.partition ?? ''}:databrew:${parameters.region}:${parameters.account}:schedule/${parameters.resourceId}`
}