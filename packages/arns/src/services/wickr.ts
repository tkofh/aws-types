export interface NetworkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkId: string
}
export type NetworkArn = `arn:${string}:wickr:${string}:${string}:network/${string}`
export function networkArn(parameters: NetworkArnParameters): NetworkArn {
  return `arn:${parameters.partition ?? ''}:wickr:${parameters.region}:${parameters.account}:network/${parameters.networkId}`
}