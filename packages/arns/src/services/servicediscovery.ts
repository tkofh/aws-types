import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface NamespaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly namespaceId: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'namespace', `arn:${string}:servicediscovery:${string}:${string}:namespace/${string}`> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly namespaceId: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.namespaceId = parameters.namespaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicediscovery:${this.region}:${this.account}:namespace/${this.namespaceId}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(parameters: NamespaceArnParameters<Partition>) {
  return new NamespaceArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service', `arn:${string}:servicediscovery:${string}:${string}:service/${string}`> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceId: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceId = parameters.serviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicediscovery:${this.region}:${this.account}:service/${this.serviceId}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceArnParameters<Partition>) {
  return new ServiceArn<Partition>(parameters)
}