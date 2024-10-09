export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceId: string
  requestPath: string
}
export type ServiceArn = `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:service/${parameters.serviceId}/${parameters.requestPath}`
}

export interface TcpServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceId: string
}
export type TcpServiceArn = `arn:${string}:vpc-lattice:${string}:${string}:service/${string}`
export function tcpServiceArn(parameters: TcpServiceArnParameters): TcpServiceArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:service/${parameters.serviceId}`
}