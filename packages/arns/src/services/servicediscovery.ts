export interface NamespaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  namespaceId: string
}
export type NamespaceArn = `arn:${string}:servicediscovery:${string}:${string}:namespace/${string}`
export function namespaceArn(parameters: NamespaceArnParameters): NamespaceArn {
  return `arn:${parameters.partition ?? ''}:servicediscovery:${parameters.region}:${parameters.account}:namespace/${parameters.namespaceId}`
}

export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceId: string
}
export type ServiceArn = `arn:${string}:servicediscovery:${string}:${string}:service/${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:servicediscovery:${parameters.region}:${parameters.account}:service/${parameters.serviceId}`
}