export interface PipeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type PipeArn = `arn:${string}:pipes:${string}:${string}:pipe/${string}`
export function pipeArn(parameters: PipeArnParameters): PipeArn {
  return `arn:${parameters.partition ?? ''}:pipes:${parameters.region}:${parameters.account}:pipe/${parameters.name}`
}