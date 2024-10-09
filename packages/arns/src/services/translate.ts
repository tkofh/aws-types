export interface TerminologyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceName: string
}
export type TerminologyArn = `arn:${string}:translate:${string}:${string}:terminology/${string}`
export function terminologyArn(parameters: TerminologyArnParameters): TerminologyArn {
  return `arn:${parameters.partition ?? ''}:translate:${parameters.region}:${parameters.account}:terminology/${parameters.resourceName}`
}

export interface ParallelDataArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceName: string
}
export type ParallelDataArn = `arn:${string}:translate:${string}:${string}:parallel-data/${string}`
export function parallelDataArn(parameters: ParallelDataArnParameters): ParallelDataArn {
  return `arn:${parameters.partition ?? ''}:translate:${parameters.region}:${parameters.account}:parallel-data/${parameters.resourceName}`
}