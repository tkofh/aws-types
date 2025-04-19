import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CidrcollectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class CidrcollectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cidrcollection',
  `arn:${string}:route53:::cidrcollection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cidrcollection' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: CidrcollectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::cidrcollection/${this.id}` as const
  }
}
export type { CidrcollectionArn }
export function cidrcollectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CidrcollectionArnParameters<Partition>,
) {
  return new CidrcollectionArn<Partition>(parameters)
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

export interface DelegationsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class DelegationsetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'delegationset',
  `arn:${string}:route53:::delegationset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'delegationset' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: DelegationsetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::delegationset/${this.id}` as const
  }
}
export type { DelegationsetArn }
export function delegationsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DelegationsetArnParameters<Partition>,
) {
  return new DelegationsetArn<Partition>(parameters)
}

export interface HealthcheckArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class HealthcheckArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'healthcheck',
  `arn:${string}:route53:::healthcheck/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'healthcheck' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: HealthcheckArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::healthcheck/${this.id}` as const
  }
}
export type { HealthcheckArn }
export function healthcheckArn<Partition extends ArnPartition = 'aws'>(
  parameters: HealthcheckArnParameters<Partition>,
) {
  return new HealthcheckArn<Partition>(parameters)
}

export interface HostedzoneArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class HostedzoneArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hostedzone',
  `arn:${string}:route53:::hostedzone/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hostedzone' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: HostedzoneArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::hostedzone/${this.id}` as const
  }
}
export type { HostedzoneArn }
export function hostedzoneArn<Partition extends ArnPartition = 'aws'>(
  parameters: HostedzoneArnParameters<Partition>,
) {
  return new HostedzoneArn<Partition>(parameters)
}

export interface TrafficpolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class TrafficpolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trafficpolicy',
  `arn:${string}:route53:::trafficpolicy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trafficpolicy' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: TrafficpolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::trafficpolicy/${this.id}` as const
  }
}
export type { TrafficpolicyArn }
export function trafficpolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrafficpolicyArnParameters<Partition>,
) {
  return new TrafficpolicyArn<Partition>(parameters)
}

export interface TrafficpolicyinstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class TrafficpolicyinstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trafficpolicyinstance',
  `arn:${string}:route53:::trafficpolicyinstance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trafficpolicyinstance' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: TrafficpolicyinstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::trafficpolicyinstance/${this.id}` as const
  }
}
export type { TrafficpolicyinstanceArn }
export function trafficpolicyinstanceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TrafficpolicyinstanceArnParameters<Partition>) {
  return new TrafficpolicyinstanceArn<Partition>(parameters)
}

export interface QueryloggingconfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly id: string
}
class QueryloggingconfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'queryloggingconfig',
  `arn:${string}:route53:::queryloggingconfig/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queryloggingconfig' as const
  readonly partition: Partition
  readonly id: string
  constructor(parameters: QueryloggingconfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53:::queryloggingconfig/${this.id}` as const
  }
}
export type { QueryloggingconfigArn }
export function queryloggingconfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueryloggingconfigArnParameters<Partition>,
) {
  return new QueryloggingconfigArn<Partition>(parameters)
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
