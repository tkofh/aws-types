export interface InstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type InstanceArn = `arn:${string}:ec2:${string}:${string}:instance/${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}`
}

export interface InstanceConnectEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceConnectEndpointId: string
}
export type InstanceConnectEndpointArn = `arn:${string}:ec2:${string}:${string}:instance-connect-endpoint/${string}`
export function instanceConnectEndpointArn(parameters: InstanceConnectEndpointArnParameters): InstanceConnectEndpointArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:instance-connect-endpoint/${parameters.instanceConnectEndpointId}`
}