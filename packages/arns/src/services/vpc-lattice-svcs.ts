import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  readonly requestPath: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Service', `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  readonly requestPath: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceId = parameters.serviceId
    this.requestPath = parameters.requestPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.serviceId}/${this.requestPath}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceArnParameters<Partition>) {
  return new ServiceArn<Partition>(parameters)
}

export interface TcpServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
}
class TcpServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'TCP Service', `arn:${string}:vpc-lattice:${string}:${string}:service/${string}`> {
  readonly [ArnResourceTypeBrand] = 'TCP Service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  constructor(parameters: TcpServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceId = parameters.serviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.serviceId}` as const
  }
}
export type { TcpServiceArn }
export function tcpServiceArn<Partition extends ArnPartition = 'aws'>(parameters: TcpServiceArnParameters<Partition>) {
  return new TcpServiceArn<Partition>(parameters)
}