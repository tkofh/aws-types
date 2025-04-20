import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CidrCollectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class CidrCollectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cidrcollection',
  `arn:${string}:route53:::cidrcollection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cidrcollection' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: CidrCollectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::cidrcollection/${this.id}` as const
  }
}
export type { CidrCollectionArn }
export function cidrCollectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CidrCollectionArnParameters<Partition>,
) {
  return new CidrCollectionArn<Partition>(parameters)
}

export interface ChangeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class ChangeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'change',
  `arn:${string}:route53:::change/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'change' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: ChangeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::change/${this.id}` as const
  }
}
export type { ChangeArn }
export function changeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChangeArnParameters<Partition>,
) {
  return new ChangeArn<Partition>(parameters)
}

export interface DelegationSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class DelegationSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'delegationset',
  `arn:${string}:route53:::delegationset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'delegationset' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: DelegationSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::delegationset/${this.id}` as const
  }
}
export type { DelegationSetArn }
export function delegationSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DelegationSetArnParameters<Partition>,
) {
  return new DelegationSetArn<Partition>(parameters)
}

export interface HealthCheckArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class HealthCheckArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'healthcheck',
  `arn:${string}:route53:::healthcheck/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'healthcheck' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: HealthCheckArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::healthcheck/${this.id}` as const
  }
}
export type { HealthCheckArn }
export function healthCheckArn<Partition extends ArnPartition = 'aws'>(
  parameters: HealthCheckArnParameters<Partition>,
) {
  return new HealthCheckArn<Partition>(parameters)
}

export interface HostedZoneArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class HostedZoneArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hostedzone',
  `arn:${string}:route53:::hostedzone/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hostedzone' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: HostedZoneArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::hostedzone/${this.id}` as const
  }
}
export type { HostedZoneArn }
export function hostedZoneArn<Partition extends ArnPartition = 'aws'>(
  parameters: HostedZoneArnParameters<Partition>,
) {
  return new HostedZoneArn<Partition>(parameters)
}

export interface TrafficPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class TrafficPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trafficpolicy',
  `arn:${string}:route53:::trafficpolicy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trafficpolicy' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: TrafficPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::trafficpolicy/${this.id}` as const
  }
}
export type { TrafficPolicyArn }
export function trafficPolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrafficPolicyArnParameters<Partition>,
) {
  return new TrafficPolicyArn<Partition>(parameters)
}

export interface TrafficPolicyInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class TrafficPolicyInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trafficpolicyinstance',
  `arn:${string}:route53:::trafficpolicyinstance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trafficpolicyinstance' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: TrafficPolicyInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::trafficpolicyinstance/${this.id}` as const
  }
}
export type { TrafficPolicyInstanceArn }
export function trafficPolicyInstanceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TrafficPolicyInstanceArnParameters<Partition>) {
  return new TrafficPolicyInstanceArn<Partition>(parameters)
}

export interface QueryLoggingConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class QueryLoggingConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'queryloggingconfig',
  `arn:${string}:route53:::queryloggingconfig/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queryloggingconfig' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: QueryLoggingConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::queryloggingconfig/${this.id}` as const
  }
}
export type { QueryLoggingConfigArn }
export function queryLoggingConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueryLoggingConfigArnParameters<Partition>,
) {
  return new QueryLoggingConfigArn<Partition>(parameters)
}

export interface VpcArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcId: string
}
class VpcArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vpc',
  `arn:${string}:ec2:${string}:${string}:vpc/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpc' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcId: string
  constructor(parameters: VpcArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcId = parameters.vpcId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:vpc/${this.vpcId}` as const
  }
}
export type { VpcArn }
export function vpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcArnParameters<Partition>,
) {
  return new VpcArn<Partition>(parameters)
}
