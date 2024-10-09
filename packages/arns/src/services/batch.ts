export interface ComputeEnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  computeEnvironmentName: string
}
export type ComputeEnvironmentArn = `arn:${string}:batch:${string}:${string}:compute-environment/${string}`
export function computeEnvironmentArn(parameters: ComputeEnvironmentArnParameters): ComputeEnvironmentArn {
  return `arn:${parameters.partition ?? ''}:batch:${parameters.region}:${parameters.account}:compute-environment/${parameters.computeEnvironmentName}`
}

export interface JobQueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobQueueName: string
}
export type JobQueueArn = `arn:${string}:batch:${string}:${string}:job-queue/${string}`
export function jobQueueArn(parameters: JobQueueArnParameters): JobQueueArn {
  return `arn:${parameters.partition ?? ''}:batch:${parameters.region}:${parameters.account}:job-queue/${parameters.jobQueueName}`
}

export interface JobDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobDefinitionName: string
}
export type JobDefinitionArn = `arn:${string}:batch:${string}:${string}:job-definition/${string}`
export function jobDefinitionArn(parameters: JobDefinitionArnParameters): JobDefinitionArn {
  return `arn:${parameters.partition ?? ''}:batch:${parameters.region}:${parameters.account}:job-definition/${parameters.jobDefinitionName}`
}

export interface JobDefinitionRevisionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobDefinitionName: string
  revision: string
}
export type JobDefinitionRevisionArn = `arn:${string}:batch:${string}:${string}:job-definition/${string}:${string}`
export function jobDefinitionRevisionArn(parameters: JobDefinitionRevisionArnParameters): JobDefinitionRevisionArn {
  return `arn:${parameters.partition ?? ''}:batch:${parameters.region}:${parameters.account}:job-definition/${parameters.jobDefinitionName}:${parameters.revision}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobArn = `arn:${string}:batch:${string}:${string}:job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:batch:${parameters.region}:${parameters.account}:job/${parameters.jobId}`
}

export interface SchedulingPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  schedulingPolicyName: string
}
export type SchedulingPolicyArn = `arn:${string}:batch:${string}:${string}:scheduling-policy/${string}`
export function schedulingPolicyArn(parameters: SchedulingPolicyArnParameters): SchedulingPolicyArn {
  return `arn:${parameters.partition ?? ''}:batch:${parameters.region}:${parameters.account}:scheduling-policy/${parameters.schedulingPolicyName}`
}