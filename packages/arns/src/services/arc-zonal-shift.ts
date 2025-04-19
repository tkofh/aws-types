import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AlbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
}
class AlbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ALB',
  `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/app/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ALB' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  constructor(parameters: AlbArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/app/${this.loadBalancerName}/${this.loadBalancerId}` as const
  }
}
export type { AlbArn }
export function albArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlbArnParameters<Partition>,
) {
  return new AlbArn<Partition>(parameters)
}

export interface NlbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
}
class NlbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'NLB',
  `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/net/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'NLB' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  constructor(parameters: NlbArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/net/${this.loadBalancerName}/${this.loadBalancerId}` as const
  }
}
export type { NlbArn }
export function nlbArn<Partition extends ArnPartition = 'aws'>(
  parameters: NlbArnParameters<Partition>,
) {
  return new NlbArn<Partition>(parameters)
}
