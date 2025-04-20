import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:ec2:${string}:${string}:instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance/${this.idInstance}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface EndpointConnectInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointConnectInstance: string
}
class EndpointConnectInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instance-connect-endpoint',
  `arn:${string}:ec2:${string}:${string}:instance-connect-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance-connect-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointConnectInstance: string
  constructor(parameters: EndpointConnectInstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointConnectInstance = parameters.idEndpointConnectInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance-connect-endpoint/${this.idEndpointConnectInstance}` as const
  }
}
export type { EndpointConnectInstanceArn }
export function endpointConnectInstanceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EndpointConnectInstanceArnParameters<Partition>) {
  return new EndpointConnectInstanceArn<Partition>(parameters)
}
