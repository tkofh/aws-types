import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNamespace: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'namespace',
  `arn:${string}:servicediscovery:${string}:${string}:namespace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNamespace: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNamespace = parameters.idNamespace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicediscovery:${this.region}:${this.account}:namespace/${this.idNamespace}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceArnParameters<Partition>,
) {
  return new NamespaceArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:servicediscovery:${string}:${string}:service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idService = parameters.idService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicediscovery:${this.region}:${this.account}:service/${this.idService}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}
