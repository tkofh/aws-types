export interface SpaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SpaceArn = `arn:${string}:repostspace:${string}:${string}:space/${string}`
export function spaceArn(parameters: SpaceArnParameters): SpaceArn {
  return `arn:${parameters.partition ?? 'aws'}:repostspace:${parameters.region}:${parameters.account}:space/${parameters.resourceId}`
}