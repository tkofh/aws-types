export interface GraphArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type GraphArn = `arn:${string}:detective:${string}:${string}:graph:${string}`
export function graphArn(parameters: GraphArnParameters): GraphArn {
  return `arn:${parameters.partition ?? ''}:detective:${parameters.region}:${parameters.account}:graph:${parameters.resourceId}`
}