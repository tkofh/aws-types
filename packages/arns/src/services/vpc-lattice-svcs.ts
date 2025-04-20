import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  readonly pathRequest: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Service',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  readonly pathRequest: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idService = parameters.idService
    this.pathRequest = parameters.pathRequest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.idService}/${this.pathRequest}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface ServiceTcpArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
}
class ServiceTcpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'TCP Service',
  `arn:${string}:vpc-lattice:${string}:${string}:service/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TCP Service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idService: string
  constructor(parameters: ServiceTcpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idService = parameters.idService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:vpc-lattice:${this.region}:${this.account}:service/${this.idService}` as const
  }
}
export type { ServiceTcpArn }
export function serviceTcpArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceTcpArnParameters<Partition>,
) {
  return new ServiceTcpArn<Partition>(parameters)
}
