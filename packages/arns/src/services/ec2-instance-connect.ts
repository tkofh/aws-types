import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'instance', `arn:${string}:ec2:${string}:${string}:instance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance/${this.instanceId}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(parameters: InstanceArnParameters<Partition>) {
  return new InstanceArn<Partition>(parameters)
}

export interface InstanceConnectEndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceConnectEndpointId: string
}
class InstanceConnectEndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'instance-connect-endpoint', `arn:${string}:ec2:${string}:${string}:instance-connect-endpoint/${string}`> {
  readonly [ArnResourceTypeBrand] = 'instance-connect-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceConnectEndpointId: string
  constructor(parameters: InstanceConnectEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceConnectEndpointId = parameters.instanceConnectEndpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance-connect-endpoint/${this.instanceConnectEndpointId}` as const
  }
}
export type { InstanceConnectEndpointArn }
export function instanceConnectEndpointArn<Partition extends ArnPartition = 'aws'>(parameters: InstanceConnectEndpointArnParameters<Partition>) {
  return new InstanceConnectEndpointArn<Partition>(parameters)
}